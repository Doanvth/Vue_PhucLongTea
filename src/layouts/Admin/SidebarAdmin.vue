<template>
    <div class="sticky-top top-0 vh-100">
        <aside id="sidebar" :class="['sidebar','h-100', 'vh-100', { expand: isExpanded }]">
            <div class="d-flex">
                <button id="toggle-btn" type="button" @click="toggleSidebar">
                    <i class="bi bi-grid"></i>
                </button>
                <div class="sidebar-logo">
                    <RouterLink to="#"><img src="" alt=""></RouterLink>
                </div>
            </div>
            <ul class="sidebar-nav">
                <li class="sidebar-item"><RouterLink to="/admin/dashboard" class="sidebar-link"> <i class="bi bi-houses"></i>
                        <span>Bảng điều khiển</span>
                    </RouterLink></li>
    
                <li class="sidebar-item"><RouterLink to="#" class="sidebar-link has-dropdown collapsed"
                        data-bs-toggle="collapse" data-bs-target="#menu" aria-expanded="false" aria-controls="film"> <i
                            class="bi bi-film"></i> <span>Menu</span>
                    </RouterLink>
                    <ul id="menu" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item"><RouterLink to="/admin/movie-table" class="sidebar-link">Nước uống</RouterLink>
                        </li>
                        <li class="sidebar-item"><RouterLink to="/admin/movie-insert" class="sidebar-link">Các loại bánh</RouterLink></li>
                    </ul>
                </li>

                <li class="sidebar-item"><RouterLink to="#" class="sidebar-link has-dropdown collapsed"
                        data-bs-toggle="collapse" data-bs-target="#product" aria-expanded="false" aria-controls="film"> <i
                            class="bi bi-film"></i> <span>Sản phẩm đóng gói</span>
                    </RouterLink>
                    <ul id="product" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li class="sidebar-item"><RouterLink to="/admin/movie-table" class="sidebar-link">Trà</RouterLink>
                        </li>
                        <li class="sidebar-item"><RouterLink to="/admin/movie-insert" class="sidebar-link">Cafe</RouterLink></li>
                    </ul>
                </li>

                <li class="sidebar-item"><RouterLink to="/admin/room-table" class="sidebar-link">
                        <i class="bi bi-building"></i> <span>.....</span>
                    </RouterLink></li>

                <li class="sidebar-item">
                    <RouterLink to="/admin/user-management" class="sidebar-link">
                        <i class="bi bi-person"></i>
                        <span>Thành viên</span>
                    </RouterLink>
                </li>
                <li class="sidebar-item">
                    <RouterLink to="/admin/order-table" class="sidebar-link">
                        <i class="bi bi-ticket-perforated"></i>
                        <span>Danh sách đơn hàng</span>
                    </RouterLink>
                </li>
                <li class="sidebar-item"><RouterLink to="/admin/statistical" class="sidebar-link"> <i
                            class="bi bi-bar-chart"></i>
                        <span>Thống kê</span>
                    </RouterLink></li>

            </ul>
            <div class="sidebar-footer">
                <RouterLink to="/" class="sidebar-link"> <i class="bi bi-box-arrow-left"></i> <span>Thoát</span>
                </RouterLink>
            </div>
        </aside>
    </div>
</template>

<script setup>
import { ref } from "vue";

const isExpanded = ref(false);

const toggleSidebar = () => {
    isExpanded.value = !isExpanded.value;
};

</script>

<style scoped>
::after,
::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none !important;
}

.menu-admin{
    display: flex;
}

#sidebar{
    width: 280px;
    min-width: 280px;
    z-index: 1000;
    transition: all 0.25s ease-in-out;
    display: flex;
    flex-direction: column;
    background-color: #0e223e;
}

#sidebar.expand{
    width: 70px;
    min-width: 70px;
}

#toggle-btn{
    background-color: transparent;
    cursor: pointer;
    border: 0;
    padding: 1rem 1.5rem;
}

#toggle-btn i {
    font-size: 1.5rem;
    color: white;
}

.sidebar-logo{
    margin: auto 0;
}

.sidebar-logo a{
    color: white;
    font-size: 1.15rem;
    font-weight: 600;
}

#sidebar.expand .sidebar-logo,
#sidebar.expand a.sidebar-link span{
    display: none;
}

.sidebar-nav{
    padding: 2rem 0;
    flex: 1 1 auto;
}

a.sidebar-link{
    padding: .625rem 1.625rem;
    color: white;
    display: block;
    font-size: 1rem;
    white-space: nowrap;
    border-left: 3px solid transparent;
}

.sidebar-link i{
    font-size: 1.1rem;
    margin-right: 0.75rem;
}

a.sidebar-link:hover{
    background-color: rgba(255,255,255,0.075);
    border-left: 3px solid #3b7ddd;
}

.sidebar-item{
    position: relative;
}

#sidebar.expand .sidebar-item .sidebar-dropdown{
    position: absolute;
    top: 0;
    left: 70px;
    background-color: #0e223e;
    padding: 0;
    min-width: 15rem;
    display: none;
}

#sidebar.expand .sidebar-item:hover .has-dropdown+ .sidebar-dropdown{
    display: block;
    max-height: 15em;
    width: 100%;
    opacity: 1;
    z-index: 1000;
}

#sidebar:not(.expand) .sidebar-link[data-bs-toggle="collapse"]::after{
    border: solid;
    border-width: 0 .075rem .075rem 0;
    content: "";
    display: inline-block;
    padding: 4px;
    position: absolute;
    right: 1.5rem;
    top: 1.2rem;
    transform: translateY(50%) rotate(-135deg);
    transition: all .2s ease-out;
}

#sidebar:not(.expand) .sidebar-link[data-bs-toggle="collapse"].collapsed::after{
    transform: rotate(45deg);
    transition: all .2s ease-out;
}

</style>