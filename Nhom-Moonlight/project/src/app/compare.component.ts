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
												<img alt="Sắp xếp các số" src="https://imageshack.com/a/img923/5852/51KUyV.jpg">
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
												<img alt="So sánh phép tính" src="https://imageshack.com/a/img923/821/mEsAXB.jpg">
												<div class="caption">
													<h4>
														So sánh phép tính
													</h4>
													<p>
														So sánh hai phép tính đã cho!
													</p>
													<p style="text-align: center">
														<a class="btn btn-primary" routerLink="/calcomp" routerLinkActive="active">Bắt đầu</a>
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
