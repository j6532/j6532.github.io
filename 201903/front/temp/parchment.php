<!------------------
Basic Block 測試
---------------- -->
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <?php include('_thisHead.php'); ?>
</head>

<body>
  <!-- Page Starting (global) -->
  <?php include('../global/_globalStarting.php'); ?>

  <!-- Content -->
  <section class="footer_fix container section_main">

    <!-- ---------------------
    內容
    --------------------- -->
    <div class="col-xs-12">
      <!-- ----------------
      羊皮紙文章
      ---------------- -->
      <!-- 文章標題 -->
      <div class="parchment_header">
        <h3 class="title">文章標題</h3>
        <span class="date">公布日期：2018/12/03</span>
      </div><!-- /.parchment_header -->
      <!-- 需緊接在 .parchment_body 之前 -->
      <div class="parchment_banner">
        <img src="../_images/default/img_16x9.jpg" alt="標題OOO">
      </div><!-- /.parchment_banner -->
      <!-- 文章內文 -->
      <div class="parchment_body">
        <!-- 文章基本資訊區塊 -->
        <div class="form_column narrow xs-responsive border artc_info">
          <div class="item">
            <div class="title align-left"><h4 class="title_text">發布單位</h4></div><!-- /.title -->
            <div class="content pure_text">司法院大法官書記處</div><!-- /.content -->
          </div><!-- /.item -->
          <div class="item">
            <div class="title align-left"><h4 class="title_text">摘要</h4></div><!-- /.title -->
            <div class="content pure_text">司法院大法官書記處公開甄選專員啟事</div><!-- /.content -->
          </div><!-- /.item -->
          <div class="item">
            <div class="title align-left"><h4 class="title_text">內文</h4></div><!-- /.title -->
            <div class="content">
              <div class="editor">
                <!-- 內文圖片位置 -->
                <img class="article_img" src="../_images/default/img.jpg" alt="標題OOO">
                <!-- 以下是編輯器內容開始 -->
                <p>內容文字。</p>
              </div><!-- /.editor -->
            </div><!-- /.content -->
          </div><!-- /.item -->
          <div class="item">
            <div class="title align-left"><h4 class="title_text">備註</h4></div><!-- /.title -->
            <div class="content pure_text">備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容，備註內容。</div><!-- /.content -->
          </div><!-- /.item -->
          <div class="item">
            <div class="title align-left"><h4 class="title_text">附件下載</h4></div><!-- /.title -->
            <div class="content">
              <!-- .content的 .pure_text 要拿掉 -->
              <!-- 附件下載 -->
              <?php include('../temp/_attach_list.php'); ?>
            </div><!-- /.content -->
          </div><!-- /.item -->
        </div><!-- /.form_column -->        
      </div><!-- /.article -->
    </div><!-- /.col -->

  </section>
  <!-- //Content -->

  <!-- Ending -->
  <?php include('../global/_globalEnding.php'); ?>

  <!-- 更換圖片
  ---------- -->

  </body>

</html>