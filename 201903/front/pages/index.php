<!DOCTYPE html>
<html lang="zh-CN">

<head>
	<?php include('../global/_head.php'); ?>
</head>

<body>

	<!-- Nav Bar -->
	<?php include('../nav/_nav.php'); ?>

	<!-- 個人介紹 -->
	<div class="home_section">
		<h1>一些介紹</h1>
		<h1>一些介紹</h1>
		<h1>一些介紹</h1>
		<h1>一些介紹</h1>
	</div><!-- /.home_section -->

	<!-- 網頁設計作品 -->
	<div class="home_section webWork_section">
		<div class="grid_basic grid_webWork" id="gridWebWork">
			<?php for ($i=0; $i < 16; $i++) { 
				include ('_webWork_item.php');
			} ?>
		</div><!-- /.grid_basic -->
	</div><!-- /.home_section -->

	<!-- 網頁設計作品跳窗 -->
	<div class="workModal" id="workSanei">
		<div class="m_header">
			<h1 class="title">BEAUTE de RICCA</h1>
			<ul class="notes">
				<li>美妝產品</li>
				<li>商品展示型網站</li>
				<li>CSS動畫設計</li>
			</ul>
			<p class="date">2018.08</p>
			<a href="https://www.beaute-de-ricca.com" class="btn_main" target="_blank">觀看作品</a>
		</div>
		<div class="m_body">
			<img src="../_images/work_sanei.jpg" class="img">
		</div>
	</div><!-- /.workModal -->




	<!-- Ending -->
	<?php include('../global/_globalEnding.php'); ?>
	
</body>

</html>