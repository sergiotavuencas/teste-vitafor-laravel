FROM php:8.2-apache

# Instalação das dependências
RUN apt-get update && \
    apt-get install -y \
        libzip-dev \
        libsqlite3-dev \
        zip

# Habilitar mod_rewrite
RUN a2enmod rewrite

# Instalar extensões do PHP
RUN docker-php-ext-install pdo_sqlite zip

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Copiar código da aplicação
COPY . /var/www/html

# Definir permissões para a pasta de banco de dados
RUN touch /var/www/html/database/database.sqlite && \
    chown -R www-data:www-data /var/www/html/database && \
    chmod -R 775 /var/www/html/database

# Definir diretório de trabalho
WORKDIR /var/www/html

# Instalar composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instalar dependências do projeto
RUN composer install

# Definir permissões
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
