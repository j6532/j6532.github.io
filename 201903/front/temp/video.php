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
    <div class="col-md-12">
      <!-- 影片 -->
      <h1>Video In Article</h1>
      <div class="artc_video_wrapper">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/B1w2HXx1yaY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  title="影片：標題文字內容"></iframe>
      </div><!-- /.artc_video_wrapper -->
      <h1>Video Thumb In Item</h1>
      <div class="item">
        <div class="item_video_wrapper">
          <!-- youtube網址自動產生背景圖 -->
          <div class="img youtube_thumb" data-thumb-src="https://www.youtube.com/watch?v=B1w2HXx1yaY"></div>
        </div><!-- /.item_video_wrapper -->
      </div><!-- /.item -->
    </div><!-- /.col -->

  </section>
  <!-- //Content -->

  <!-- Ending -->
  <?php include('../global/_globalEnding.php'); ?>

  <!-- 更換圖片
  ---------- -->

  </body>

</html>