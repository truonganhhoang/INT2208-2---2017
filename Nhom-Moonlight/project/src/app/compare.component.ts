import { Component } from '@angular/core';

@Component({
  selector: 'cmp-app',
  template: `<div class="row" style="padding-top: 5px">
						<div class="col-md-12" style="background-color:#1d61f0">
									<h3>
										{{title}}
									</h3>
									<div class="row">
										<div class="col-md-4">
											<div class="thumbnail">
												<img alt="Sắp xếp" src="image/smallbig.jpg">
												<div class="caption">
													<h4>
														Sắp xếp các số
													</h4>
													<p>
														Chọn lần lượt các số theo thứ tự từ bé đến lớn!
													</p>
													<p style="text-align: center">
														<a class="btn btn-primary" routerLink="/smallbig" routerLinkActive="active">Bắt đầu</a>
													</p>
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="thumbnail">
												<img alt="Số bé Số lớn" src="image/coming.jpg">
												<div class="caption">
													<h4>
														Coming Soon
													</h4>
													<p>
														Coming soon
													</p>
													<p style="text-align: center">
														<a class="btn btn-primary disabled" href="#">Bắt đầu</a>
													</p>
												</div>
											</div>
										</div>
									</div>
                                    </div>
                                    </div>`,
      styleUrls: ['/app.component.css']
})
export class CompareComponent { title = 'So sánh'; }
