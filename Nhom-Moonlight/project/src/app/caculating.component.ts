import { Component } from '@angular/core';

@Component({
  selector: 'cal-app',
  template: `<div class="row" style="padding-top: 5px">
				<div class="col-md-12" style="background-color:#1d61f0">
					<h3>
						{{title}}
					</h3>
					<div class="row" >
						<div class="col-md-4">
							<div class="thumbnail">
								<img alt="Đúng hay sai" src="https://imageshack.com/a/img923/1853/VWafBj.jpg">
								<div class="caption">
									<h4>
										Đúng hay sai
									</h4>
									<p>
										Phép tính đã cho đúng hay sai?
									</p>
									<p style="text-align: center">
										<a class="btn btn-primary" routerLink="/rightwrong" routerLinkActive="active">Bắt đầu</a>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="thumbnail">
								<img alt="Chọn kết quả đúng" src="https://imageshack.com/a/img924/4114/vbFZBY.jpg">
								<div class="caption">
									<h4>
										Chọn kết quả đúng
									</h4>
									<p>
										Tìm kết quả của phép tính!
									</p>
									<p style="text-align: center">
										<a class="btn btn-primary" routerLink="/findtheresult" routerLinkActive="active">Bắt đầu</a>
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="thumbnail">
								<img alt="Tìm dấu phép tính" src="https://imageshack.com/a/img923/9206/73dqwX.jpg">
								<div class="caption">
									<h4>
										Tìm dấu phép tính
									</h4>
									<p>
										Chọn dấu để được phép tính đúng!
									</p>
									<p style="text-align: center">
										<a class="btn btn-primary" routerLink="/whatmissing" routerLinkActive="active">Bắt đầu</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
					</div>`,
          styleUrls: ['/app.component.css'],
})
export class CaculatingComponent { title = 'Các phép tính cơ bản'; }
