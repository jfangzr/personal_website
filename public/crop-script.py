#!/usr/bin/env python3
"""
Image cropping script that:
1. Takes a folder of JPG images
2. Resizes so smaller dimension matches target width or height 
3. Center-crops to specified dimensions (default: 400x600)
"""

import os
import sys
from PIL import Image
import argparse

def process_image(input_path, output_path, target_width=400, target_height=600):
    """Process a single image: resize and center crop to specified dimensions"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (handles RGBA, grayscale, etc.)
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            original_width, original_height = img.size
            
            # Calculate scaling factor to make smaller dimension match target
            # We want the smaller dimension to be either 400 (width) or 600 (height)
            width_scale = target_width / original_width
            height_scale = target_height / original_height
            
            # Use the larger scale factor so smaller dimension reaches target
            scale_factor = max(width_scale, height_scale)
            
            # Calculate new dimensions after scaling
            new_width = int(original_width * scale_factor)
            new_height = int(original_height * scale_factor)
            
            # Resize the image
            img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Calculate crop coordinates for center crop
            left = (new_width - target_width) // 2
            top = (new_height - target_height) // 2
            right = left + target_width
            bottom = top + target_height
            
            # Perform center crop
            img_cropped = img_resized.crop((left, top, right, bottom))
            
            # Save the processed image
            img_cropped.save(output_path, 'JPEG', quality=95)
            
            return True
            
    except Exception as e:
        print(f"Error processing {input_path}: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description='Crop and resize JPG images to specified dimensions')
    parser.add_argument('input_folder', help='Path to folder containing JPG images')
    parser.add_argument('-o', '--output', help='Output folder (default: input_folder + "_processed")')
    parser.add_argument('-w', '--width', type=int, default=400, help='Target width (default: 400)')
    parser.add_argument('-t', '--height', type=int, default=600, help='Target height (default: 600)')
    parser.add_argument('--overwrite', action='store_true', help='Overwrite original images instead of creating new folder')
    
    args = parser.parse_args()
    
    input_folder = args.input_folder
    target_width = args.width
    target_height = args.height
    
    if not os.path.exists(input_folder):
        print(f"Error: Input folder '{input_folder}' does not exist")
        sys.exit(1)
    
    # Determine output folder
    if args.overwrite:
        output_folder = input_folder
    elif args.output:
        output_folder = args.output
    else:
        output_folder = input_folder.rstrip('/') + "_processed"
    
    # Create output folder if it doesn't exist and we're not overwriting
    if not args.overwrite and not os.path.exists(output_folder):
        os.makedirs(output_folder)
        print(f"Created output folder: {output_folder}")
    
    # Find all JPG files
    jpg_extensions = ['.jpg', '.jpeg', '.JPG', '.JPEG']
    jpg_files = []
    
    for filename in os.listdir(input_folder):
        if any(filename.endswith(ext) for ext in jpg_extensions):
            jpg_files.append(filename)
    
    if not jpg_files:
        print(f"No JPG files found in '{input_folder}'")
        sys.exit(1)
    
    print(f"Found {len(jpg_files)} JPG files to process")
    print(f"Target dimensions: {target_width}x{target_height}")
    
    # Process each image
    successful = 0
    failed = 0
    
    for filename in jpg_files:
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)
        
        print(f"Processing: {filename}")
        
        if process_image(input_path, output_path, target_width, target_height):
            successful += 1
        else:
            failed += 1
    
    print(f"\nProcessing complete!")
    print(f"Successfully processed: {successful}")
    print(f"Failed: {failed}")
    
    if not args.overwrite:
        print(f"Output images saved to: {output_folder}")

if __name__ == "__main__":
    main()