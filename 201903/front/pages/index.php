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
		
	</div><!-- /.home_section -->

	<!-- 網頁設計作品 -->
	<div class="home_section">
		<div class="grid_basic grid_webWork">
				<div class="item">
					<div class="img"></div>
				</div><!-- /.item -->
			<?php for ($i=0; $i < 16; $i++) { echo 
				'<div class="item">
					<div class="img"></div>
				</div><!-- /.item -->';
			} ?>
		</div><!-- /.grid_basic -->
	</div><!-- /.home_section -->




	<!-- Ending -->
	<?php include('../global/_globalEnding.php'); ?>
	
</body>

</html>