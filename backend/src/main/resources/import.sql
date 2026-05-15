-- Populate Categories
INSERT INTO categories (category_name) VALUES ('Energia Renovável');
INSERT INTO categories (category_name) VALUES ('Redução de Plástico');
INSERT INTO categories (category_name) VALUES ('Compostagem e Jardinagem');
INSERT INTO categories (category_name) VALUES ('Higiene Pessoal Eco');
INSERT INTO categories (category_name) VALUES ('Limpeza Ecológica');
INSERT INTO categories (category_name) VALUES ('Moda Sustentável');
INSERT INTO categories (category_name) VALUES ('Utensílios Domésticos Reutilizáveis');
INSERT INTO categories (category_name) VALUES ('Eletrônicos Circulares');
INSERT INTO categories (category_name) VALUES ('Escritório e Papelaria Eco');
INSERT INTO categories (category_name) VALUES ('Mobilidade de Baixo Carbono');

-- Populate Items Table
INSERT INTO items (item_name, item_quantity, category_id) VALUES ('Painel Solar Portátil 20W', 15, 1);
INSERT INTO items (item_name, item_quantity, category_id) VALUES ('Carregador Solar de Celular', 42, 1);
INSERT INTO items (item_name, item_quantity, category_id) VALUES ('Garrafa Térmica de Inox 750ml', 85, 2);
INSERT INTO items (item_name, item_quantity, category_id) VALUES ('Kit Canudos de Inox com Escova', 120, 2);
INSERT INTO items (item_name, item_quantity, category_id) VALUES ('Minhocário Doméstico de Plástico Reciclado', 8, 3);
INSERT INTO items (item_name, item_quantity, category_id) VALUES ('Escova de Dente de Bambu Média', 250, 4);
INSERT INTO items (item_name, item_quantity, category_id) VALUES ('Shampoo em Barra de Aloe Vera', 63, 4);
INSERT INTO items (item_name, item_quantity, category_id) VALUES ('Sabão de Louça Biodegradável', 94, 5);
INSERT INTO items (item_name, item_quantity, category_id) VALUES ('Camiseta de Algodão Orgânico Eco', 37, 6);
INSERT INTO items (item_name, item_quantity, category_id) VALUES ('Caderno de Papel Reciclado A5', 110, 9);