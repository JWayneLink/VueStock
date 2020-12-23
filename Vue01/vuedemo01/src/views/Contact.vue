<template>
    <div class="contact">
        <div class="container" style="width:70%">
            <div class="row">
                <div class="col-sm">
                    <div class="title">{{ $t('contactInfo.Pudong.title') }}</div>
                    <p>{{ $t('contactInfo.Pudong.content') }}</p>
                </div>
                <div class="col-sm">
                    <div class="title">{{ $t('contactInfo.Pudong2.title') }}</div>
                    <p>{{ $t('contactInfo.Pudong2.content') }}</p>
                </div>
                <div class="col-sm">
                    <div class="title">{{ $t('contactInfo.HiTech.title') }}</div>
                    <p>{{ $t('contactInfo.HiTech.content') }}</p>
                </div>
            </div>

            <div class="row">
                <div class="col-sm">
                    <div class="title">{{ $t('contactInfo.Shanghai.title') }}</div>
                    <p>{{ $t('contactInfo.Shanghai.content') }}</p>
                </div>
                <div class="col-sm">
                    <div class="title">{{ $t('contactInfo.Zhejiang.title') }}</div>
                    <p>{{ $t('contactInfo.Zhejiang.content') }}</p>
                </div>
                <div class="col-sm">
                    <div class="title">{{ $t('contactInfo.ChongQing.title') }}</div>
                    <p>{{ $t('contactInfo.ChongQing.content') }}</p>
                </div>
            </div>

            <div class="row">
                <div class="col-sm">
                    <div class="title">{{ $t('contactInfo.ChongQing2.title') }}</div>
                    <p>{{ $t('contactInfo.ChongQing2.content') }}</p>
                </div>
                <div class="col-sm">
                    <div class="title">{{ $t('contactInfo.Tianjin.title') }}</div>
                    <p>{{ $t('contactInfo.Tianjin.content') }}</p>
                </div>
                <div class="col-sm">
                    <div class="title">{{ $t('contactInfo.Beijing.title') }}</div>
                    <p>{{ $t('contactInfo.Beijing.content') }}</p>
                </div>
            </div>
            <img src="../assets/contact.png" alt="" style="width:100%">
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Contact',
    }
</script>

<style>
    img {
        padding-top: 10px;
        padding-bottom: 0px;
    }

    p {
        text-align: left;
        padding-left: 1rem;
        padding-bottom: 1rem;
    }

    .title {
        font-size: 1.2rem;
        background-color: #cc0033;
        border-radius: 5px;
        color: #fff;
        text-align: center;
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin-bottom: 1rem;
    }

    .col-sm {
        padding: 30px;
    }
</style>