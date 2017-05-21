import { Component } from '@angular/core';

@Component({
  selector: 'adv-app',
  template: `<div class="row" style="padding-top: 5px; padding-bottom: 50px">
								<div class="col-md-12" style="background-color:#1d61f0">
									<h3>
										{{title}}
									</h3>
									<div class="row">
										<div class="col-md-4">
											<div class="thumbnail">
												<img alt="Chọn các số hạng" src="https://imageshack.com/a/img922/9358/G811ky.jpg">
												<div class="caption">
													<h4>
														Chọn các số hạng
													</h4>
													<p>
														Chọn số ô đã cho để được kết quả!
													</p>
													<p style="text-align: center">
														<a class="btn btn-primary" routerLink="/makenumber" routerLinkActive="active">Bắt đầu</a>
													</p>
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="thumbnail">
												<img alt="Luyện trí nhớ" src="https://imageshack.com/a/img923/9200/ozKp9y.jpg">
												<div class="caption">
													<h4>
														Luyện trí nhớ
													</h4>
													<p>
														Ghi nhớ và tính tổng!
													</p>
													<p style="text-align: center">
														<a class="btn btn-primary" routerLink="/memory" routerLinkActive="active">Bắt đầu</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>`,
      styleUrls: ['/app.component.css']
})
export class AdvanceComponent { title = 'Nâng cao'; }
