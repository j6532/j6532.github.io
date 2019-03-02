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
    商品 Sidebar
    --------------------- -->
    <div class="col-xs-12 col-md-2">
      <?php include('../prd/_prdl_sidebar.php'); ?>
    </div><!-- /.col -->
    <!-- ---------------------
    商品 Grid
    --------------------- -->
    <div class="col-xs-12 col-md-10">
      <?php include('../prd/_actionbar.php'); ?>
      <!-- --------------------
      Stepper
      -------------------- -->
      <ul class="nav nav-pills nav-justified blocky stepper no-margin-bottom" style="border-bottom: 0;"><!-- 加style -->
        <li class="active">
          <p class="step">第1步</p>
          <p></p>
        </li>
        <li>
          <p class="step">第2步</p>
          <p></p>
        </li>
        <li>
          <p class="step">第3步</p>
          <p></p>
        </li>
      </ul>
      <!-- --------------------
      Table
      -------------------- -->
      <?php include('../temp/newst/_table.php'); ?>
      <!-- --------------------
      Tab
      -------------------- -->
      <div class="blocky">
        <ul class="tab blocky_tab" role="tablist">
          <li class="active"><a href="#tab-1" role="tab" data-toggle="tab">全部</a></li>
          <li ><a href="#tab-2" role="tab" data-toggle="tab">重要公告</a></li>
          <li ><a href="#tab-1" role="tab" data-toggle="tab">最新快訊</a></li>
          <li ><a href="#tab-2" role="tab" data-toggle="tab">招生資訊</a></li>
          <li ><a href="#tab-1" role="tab" data-toggle="tab">就業資訊</a></li>
          <li ><a href="#tab-2" role="tab" data-toggle="tab">AACSB</a></li>
        </ul><!-- /.tab -->
        <div class="blocky_body tab-content">
          <div role="tabpanel" class="tab-pane fade in active" id="tab-1">
            內容1
          </div>
          <div role="tabpanel" class="tab-pane fade" id="tab-2">
            內容2
          </div><!-- /.tab-pane -->
        </div><!-- /.block -->
      </div><!-- /.blocky -->
      <!-- --------------------
      文章, Pagination
      -------------------- -->
      <div class="blocky">
        <div class="blocky_header">
          <h3>最新消息</h3>
        </div><!-- /.header -->
        <div class="blocky_body form_column border editor">
          <!-- item -->
          <?php for ($i=0; $i < 6; $i++) { 
            include('../artc/_news_item.php');
          } ?>
          <!-- //item -->
        </div><!-- /.block -->
        <div class="blocky_footer align-center">
          <?php include('../temp/_pagination.php'); ?>
        </div><!-- /.footer -->
      </div><!-- /.blocky -->
      <!-- --------------------
      Cube, Form Column
      -------------------- -->
      <div class="blocky">
        <div class="blocky_body cube-row">
          <!-- 訂購人資料 -->
          <?php include('../cart/_customer.php'); ?>
          <!-- 收件人資料 -->
          <?php include('../cart/_recipient.php'); ?>
          <!-- 換行 -->
          <div class="clearfix"></div>
          <!-- 發票資料 -->
          <div class="cube w-50">
            <div class="cube-header">發票資料</div>
            <div class="cube-body">
              <div class="input_row">
                <?php include('../cart/_receipt.php'); ?>
              </div>
            </div>
          </div><!-- /.cube -->
          <!-- 訂單備註 -->
          <div class="cube w-50">
            <div class="cube-header">訂單備註</div>
            <div class="cube-body">
              <textarea placeholder="填寫備註" row="3"></textarea>
            </div>
          </div><!-- /.cube -->
        </div><!-- /.cube_row -->
        <div class="blocky_footer">
          <a href="cart_complete.php">
            <button class="btn_main" type="button">確認結帳</button>
          </a>
        </div><!-- /.footer -->
      </div><!-- /.blocky -->
      <!-- --------------------
      附件下載
      -------------------- -->
      <?php include('../temp/_attach.php'); ?>
      <!-- -------------------- -->
    </div><!-- /.col -->
  </section>
  <!-- //Content -->

  <!-- Ending -->
  <?php include('../global/_globalEnding.php'); ?>

  <!-- 更換圖片
  ---------- -->

  </body>

</html>