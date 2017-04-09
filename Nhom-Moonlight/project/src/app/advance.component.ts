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
												<img alt="Chọn các số hạng" src="image/coming.jpg">
												<div class="caption">
													<h4>
														Coming Soon
													</h4>
													<p>
														Coming soon
													</p>
													<p style="text-align: center">
														<a class="btn btn-primary disabled" routerLink="/makenumber" routerLinkActive="active">Bắt đầu</a>
													</p>
												</div>
											</div>
										</div>
										<div class="col-md-4">
											<div class="thumbnail">
												<img alt="Luyện trí nhớ" src="image/coming.jpg">
												<div class="caption">
													<h4>
														Coming Soon
													</h4>
													<p>
														Coming soon
													</p>
													<p style="text-align: center">
														<a class="btn btn-primary disabled" routerLink="/memory" routerLinkActive="active">Bắt đầu</a>
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
