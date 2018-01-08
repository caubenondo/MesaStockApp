<template>
    <div class="about">
        <p>Click on the link below for more info:</p>

        <nav class="navbar navbar-toggleable-md navbar-light">
            <ul class="navbar-nav">
                <router-link tag="li" to='/history' class='nav-item'>
                    <a class="nav-link">history</a>
                </router-link>
                <router-link tag="li" to="contact" class='nav-item'>
                    <a class="nav-link">contact</a>
                </router-link>
                <router-link tag="li" to="/ordering-guide" class='nav-item'>
                    <a class="nav-link">ordering Guide</a>
                </router-link>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

