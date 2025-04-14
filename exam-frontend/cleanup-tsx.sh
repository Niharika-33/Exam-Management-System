
#!/bin/bash
cd src/components/ui
find . -name "*.tsx" -delete
echo "All .tsx files in the UI folder have been deleted."
chmod +x cleanup-tsx.sh
