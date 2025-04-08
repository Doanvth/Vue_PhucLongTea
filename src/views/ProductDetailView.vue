<template>
    <div>
        <div class="container-lg mt-3">
            <Breadcrumb title="Sản phẩm" />
            <div class="row g-4">
                <div class="col-md-6 d-flex justify-content-center justify-content-md-end">
                    <div class="card card-product-detail bg-secondary-subtle border-0 rounded-4">
                        <img :src="ImgTraDau" alt="">
                    </div>
                </div>
                <div class="col-md-6 col-xl-5">
                        <h4 class="text-success">Trà Ô Long Dâu (L)</h4>
                        <div>SKU: 65000107</div>
                        <div class="badge text-bg-danger text-uppercase">MỚI - BST TEARAMISU</div>
                        <div class="d-flex justify-content-between mt-3">
                            <h4 class="text-success">65.000 đ</h4>
                            <QuantityButton />
                        </div>
                        <div class="row mb-3">
                            <div class="col-12 mb-2">
                                <div class="text-success mb-2 fw-bold">Chọn kích cỡ</div>
                                <div class="btn-group gap-3" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="size" id="sizeM" autocomplete="off"
                                        checked>
                                    <label class="btn btn-outline-success rounded-2 p-0" for="sizeM">
                                        <div class="border-bottom py-2 px-4">Size M</div>
                                        <div class="border-top">-10.000 đ</div>
                                    </label>

                                    <input type="radio" class="btn-check" name="size" id="sizeL" autocomplete="off">
                                    <label class="btn btn-outline-success rounded-2 p-0" for="sizeL">
                                        <div class="border-bottom py-2 px-4">Size L</div>
                                        <div class="border-top">0 đ</div>
                                    </label>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="text-success mb-2 fw-bold">Trà</div>
                                <div class="btn-group gap-3" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="tra" id="tra-it" autocomplete="off"
                                        checked>
                                    <label class="btn btn-outline-success rounded-2" for="tra-it">Ít</label>

                                    <input type="radio" class="btn-check" name="tra" id="tra-binhthuong" autocomplete="off">
                                    <label class="btn btn-outline-success rounded-2" for="tra-binhthuong">Bình thường</label>

                                    <input type="radio" class="btn-check" name="tra" id="tra-nhieu" autocomplete="off">
                                    <label class="btn btn-outline-success rounded-2" for="tra-nhieu">Nhiều</label>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="text-success mb-2 fw-bold">Ngọt</div>
                                <div class="btn-group gap-3" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="ngot" id="ngot-it" autocomplete="off"
                                        checked>
                                    <label class="btn btn-outline-success rounded-2" for="ngot-it">Ít</label>

                                    <input type="radio" class="btn-check" name="ngot" id="ngot-binhthuong" autocomplete="off">
                                    <label class="btn btn-outline-success rounded-2" for="ngot-binhthuong">Bình thường</label>

                                    <input type="radio" class="btn-check" name="ngot" id="ngot-nhieu" autocomplete="off">
                                    <label class="btn btn-outline-success rounded-2" for="ngot-nhieu">Nhiều</label>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="text-success mb-2 fw-bold">Đá</div>
                                <div class="btn-group gap-3" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="da" id="da-it" autocomplete="off"
                                        checked>
                                    <label class="btn btn-outline-success rounded-2" for="da-it">Ít</label>

                                    <input type="radio" class="btn-check" name="da" id="da-binhthuong" autocomplete="off">
                                    <label class="btn btn-outline-success rounded-2" for="da-binhthuong">Bình thường</label>

                                    <input type="radio" class="btn-check" name="da" id="da-nhieu" autocomplete="off">
                                    <label class="btn btn-outline-success rounded-2" for="da-nhieu">Nhiều</label>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button class="btn btn-success px-5"><i class="bi bi-cart-plus-fill me-2"></i>Thêm vào giỏ hàng: <span>65.000 đ</span></button>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcrumb from '../components/Breadcrumb.vue';
import ImgTraDau from '../assets/images/tra-o-long-dau.png'
import QuantityButton from '../components/QuantityButton.vue';

</script>

<style scoped>
.card-product-detail {
    width: 30rem;
    height: 30rem;
    position: relative;
}

.card-product-detail img {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>