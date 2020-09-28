import React from 'react';

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <span class="navbar-brand mb-0 h1">Raphael Deonova</span>
                </div>
                <div class="mx-auto order-0">
                    <a class="navbar-brand mx-auto" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">School</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Academic</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Background</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;