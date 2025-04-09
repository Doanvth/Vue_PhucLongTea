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
                    <h4 class="text-success">Trà Ô Long Dâu (<span>L</span>)</h4>
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
                                <input type="radio" class="btn-check" name="size" id="sizeM" autocomplete="off" checked>
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
                                <input type="radio" class="btn-check" name="tra" id="tra-it" autocomplete="off" checked>
                                <label class="btn btn-outline-success rounded-2" for="tra-it">Ít</label>

                                <input type="radio" class="btn-check" name="tra" id="tra-binhthuong"
                                    value="tra-binhthuong" autocomplete="off">
                                <label class="btn btn-outline-success rounded-2" for="tra-binhthuong">Bình
                                    thường</label>

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

                                <input type="radio" class="btn-check" name="ngot" id="ngot-binhthuong"
                                    autocomplete="off">
                                <label class="btn btn-outline-success rounded-2" for="ngot-binhthuong">Bình
                                    thường</label>

                                <input type="radio" class="btn-check" name="ngot" id="ngot-nhieu" autocomplete="off">
                                <label class="btn btn-outline-success rounded-2" for="ngot-nhieu">Nhiều</label>
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="text-success mb-2 fw-bold">Đá</div>
                            <div class="btn-group gap-3" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="da" id="da-it" autocomplete="off" checked>
                                <label class="btn btn-outline-success rounded-2" for="da-it">Ít</label>

                                <input type="radio" class="btn-check" name="da" id="da-binhthuong" autocomplete="off">
                                <label class="btn btn-outline-success rounded-2" for="da-binhthuong">Bình thường</label>

                                <input type="radio" class="btn-check" name="da" id="da-nhieu" autocomplete="off">
                                <label class="btn btn-outline-success rounded-2" for="da-nhieu">Nhiều</label>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3">
                        <button class="btn btn-success px-5"><i class="bi bi-cart-plus-fill me-2"></i>Thêm vào giỏ hàng:
                            <span>65.000 đ</span></button>
                    </div>
                    <div class="d-none">
                        <div class="infomation mb-3">
                            <h3 class="text-success">Thông tin sản phẩm</h3>
                            <div class="">
                                - Quy cách: 150 g <br>
                                - Mô tả: Trà lài là sự kết hợp hoàn hảo giữa lá trà xanh chất lượng cao và hoa lài.
                                Trà được lên men và pha trộn với hoa lài,
                                quá trình này được lặp lại nhiều lần giúp cho trà có mùi thơm tự nhiên của hoa lài,
                                trà lài khi pha có màu vàng đẹp,
                                vị ngọt của hoa lài và vị đắng nhẹ của trà tạo nên cảm giác khoan khoái và thư giãn cho
                                người dùng.
                            </div>
                        </div>
                        <div class="mb-3">
                            <h3 class="text-success">Hướng dẫn sử dụng</h3>
                            <div class="">
                                - Bảo quản: Nơi khô thoáng <br>
                                - Hạn sử dụng: Xem trên bao bì <br>
                                - Cách pha trà: <br>
                                + Tráng ấm trà và tách trà bằng nước nóng <br>
                                + Dùng 100ml nước sôi rót vào ấm trà cùng với 5g trà. <br>
                                + Đợi khoảng 2 - 3 phút là có thể dùng được với hương vị tự nhiên của trà Phúc Long <br>
                            </div>
                        </div>
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