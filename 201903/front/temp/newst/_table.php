<div class="blocky">
  <!-- <div class="blocky_header">
    <h3>最新消息</h3>
  </div> -->
  <table class="blocky_body form_table xs-responsive">
    <thead>
      <tr>
        <td class="w-f-2">日期</td>
        <td class="w-f-2">分類</td>
        <td>標題</td>
      </tr>
    </thead>
    <tbody>
      <?php
        for ($i = 0; $i < 12; $i++) {
          include('_table_item.php');
        }
      ?><!-- //item -->
    </tbody>
  </table>
  <div class="blocky_footer">
  <?php include('../temp/_pagination.php'); ?>
  </div>
</div>