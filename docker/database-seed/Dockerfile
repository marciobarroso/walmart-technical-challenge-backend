FROM mongo
COPY docker/database-seed/data/products.json /products.json
CMD mongoimport --host database --db 'lider' --authenticationDatabase admin --username user --password pass123 --collection products --drop --file /products.json --jsonArray