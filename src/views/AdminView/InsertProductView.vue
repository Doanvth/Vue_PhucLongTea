<template>
    <div class="container-fluid mt-3">
        <div class="card p-3">
            <h2 class="text-uppercase mb-3">Thêm sản phẩm đóng gói</h2>
            <form class="row g-3">
                <div class="col-md-6">
                    <div class="row g-3">
                        <div class="col-md-6">
                            <label for="name" class="form-label">Tên sản phẩm</label>
                            <input type="text" class="form-control" id="name">
                        </div>
                        <div class="col-md-6">
                            <label for="" class="form-label">Loại sản phẩm</label>
                            <input type="text" class="form-control" id="">
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="sku" class="form-label">SKU</label>
                                <input type="text" class="form-control" id="sku" placeholder="">
                            </div>
                            <div class="">
                                <label for="image" class="form-label">Hình</label>
                                <input type="file" class="form-control" id="image" accept=".png,.webp,.jpg">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mt-3" style="height: 200px;">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row g-3">
                        <div class="col-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Thông tin sản phẩm</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                        <div class="col-12">
                            <label for="exampleFormControlTextarea1" class="form-label">Hướng dẫn sử dụng</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>