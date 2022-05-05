<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Category</title>

    <style>
        img {
            object-fit: contain;
            height: 200px;
            width: 200px;
        }
    </style>
        <!-- JS only -->
        <script src="js/function.js" defer></script>
        <script src="js/product.js" defer></script>   

    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</head>
<body>

    <!-- Header -->
    <header class="bg-dark text-center text-white py-4">
            <h1 class="fs-3 text-uppercase">Ma boutique en ligne</h1>
    </header>
    
    <main class="container pt-5">

        <div class="pb-4">
            <a href="index.php" class="btn btn-outline-success">Accueil</a>
        </div>    

        <h2 class="fs-4 mb-3 category-name"></h2>

        <!-- Chargement en cours... -->
        <div class="text-center spinner-article py-5">
            <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
            
        <!-- Error fetch() -->            
        <div id="error" class="alert alert-danger d-none"></div>
            
        <!-- Détail d'un article -->
        <div class="row"></div>        
    </main>
</body>

</html>