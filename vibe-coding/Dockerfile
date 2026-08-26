# Use the official Nginx web server image
FROM nginx:latest

# Copy the HTML file into the web server's default directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]