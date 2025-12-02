# Projects Folder Structure

This folder contains detailed information for each project displayed in the portfolio.

## Folder Structure

Each project has the following structure:
```
projects/
├── project-name/
│   ├── screenshots/     # Project screenshots and images
│   └── text/           # Project descriptions and details
│       └── description.txt
```

## How to Add Content

### Adding Screenshots
1. Place your project screenshots in the `screenshots/` folder
2. Supported formats: JPG, PNG, GIF
3. Recommended naming: `screenshot-1.jpg`, `screenshot-2.jpg`, etc.

### Adding Text Content
1. Edit the `description.txt` file in the `text/` folder
2. Add detailed project information, methodology, findings, etc.
3. The content will automatically appear in the project modal when users click "Details"

## Current Projects

1. **heat-sensitivity** - Heat Sensitivity Index for Richmond, VA
2. **transportation-madina** - Transportation Planning using MIT's Madina library
3. **sf-housing** - San Francisco Housing and Job Growth Forecasting
4. **opioid-analysis** - Opioid Analysis for Virginia
5. **country-analysis** - International Development Comparison Study

## Integration

The portfolio website automatically loads content from these folders:
- Text content from `text/description.txt`
- Images from `screenshots/` folder
- Repository links can be added to the project data in `index.html`