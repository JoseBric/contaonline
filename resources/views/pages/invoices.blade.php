<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="/invoices" method="post" enctype="multipart/form-data">
        @csrf
        <input type="file" name="xml_input" accept=".xml" multiple>
        <input type="submit" value="submit">
    </form>
</body>
</html>