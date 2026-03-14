import os
from PIL import Image

def compress_images(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            file_path = os.path.join(directory, filename)
            img = Image.open(file_path)
            img.save(file_path, optimize=True, quality=80)
            print(f'Compressed {filename}')

if __name__ == '__main__':
    compress_images('public/images')