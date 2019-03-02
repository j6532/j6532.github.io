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
      <!-- 文章標題 -->
      <div class="parchment_header">
        <h3 class="title">待審案件一覽表</h3>
      </div><!-- /.parchment_header -->
      <!-- 待審案件清單 -->
      <div class="list_second list_col_1">
        <?php  
          $string = '
            <div class="item">
              <p class="title"><a href="#" title="文字標題">機關聲請案一覽表(依字序筆劃排序)</a></p>
              <p class="date">更新日期：2018/13/03</p>
            </div><!-- /.item -->
          ';
          for ($i=0; $i < 4; $i++) {
            echo $string;
          } 
        ?>
      </div><!-- /.list_second list_col_1 -->

      <!-- 年表 -->
      <div class="blocky">
        <!-- 標題 -->
        <div class="blocky_header">
          <h3 class="title align-center">年表</h3>
        </div><!-- /.blocky_header -->
        <!-- 清單 -->
        <ul class="list_second list_year">
          <?php  
            $string = '
              <li class="item">
                <p class="title"><a href="../_images/slider/slider_001.jpg" download title="下載105年統計年表">105年</a></p>
              </li><!-- /.item -->
            ';
            for ($i=0; $i < 17; $i++) {
              echo $string;
            } 
          ?>
        </ul><!-- /清單-->
      </div><!-- /.blocky -->

      <!-- 月表 -->
      <div class="blocky">
        <!-- 標題 -->
        <div class="blocky_header">
          <h3 class="title align-center">月表</h3>
        </div><!-- /.blocky_header -->
        <!-- 清單 -->
        <ul class="list_second list_col_1 list_month">
          <?php 
            for ($i=0; $i < 12; $i++) {
              $string1 = '
                <li class="item">
                  <p class="inner_title">105年</p>
                  <ul class="inner_content">
              ';
              $string2 = '
                  <li class="inner_content_item">
                    <p class="title"><a href="../_images/slider/slider_001.jpg" download title="下載105年1月統計年表">1月</a></p>
                  </li><!-- /.item -->
              ';
              $string3 = '
                </ul>
              </li><!-- /.item -->
              ';

              echo $string1;
              for ($a=0; $a < 12; $a++) {
                echo $string2;
              };
              echo $string3;
            }
          ?>
        </ul><!-- /清單-->
      </div><!-- /.blocky -->
      
      

    </div><!-- /.col -->

  </section>
  <!-- //Content -->

  <!-- Ending -->
  <?php include('../global/_globalEnding.php'); ?>

  <!-- 更換圖片
  ---------- -->

  </body>

</html>