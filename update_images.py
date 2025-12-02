import os
import json

def update_image_indexes():
    projects_dir = "projects"
    
    for project in os.listdir(projects_dir):
        screenshots_dir = os.path.join(projects_dir, project, "screenshots")
        index_file = os.path.join(screenshots_dir, "index.json")
        
        if os.path.exists(screenshots_dir):
            # Get all image files
            image_files = []
            for file in os.listdir(screenshots_dir):
                if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.webp', '.jfif')) and file != 'index.json':
                    image_files.append(file)
            
            # Write to index.json
            with open(index_file, 'w') as f:
                json.dump(image_files, f)
            
            print(f"Updated {project}: {len(image_files)} images")

if __name__ == "__main__":
    update_image_indexes()
    print("Image indexes updated!")