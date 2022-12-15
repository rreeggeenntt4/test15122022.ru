<?php
/* require_once $homeurl . "/include/bdconect.php"; */
/* Создаем базу если не сущствует */

mysqli_query($mysqli, "CREATE TABLE IF NOT EXISTS users (
    id int(10) unsigned NOT NULL AUTO_INCREMENT,
    first_name char(255) DEFAULT NULL,
    email char(255) DEFAULT NULL,
    pass char(255) DEFAULT NULL,
    created_at char(255) DEFAULT NULL,
    PRIMARY KEY (id)
)");
