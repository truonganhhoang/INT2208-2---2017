
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component ({
    selector: 'my-xac_nhan',
    templateUrl: './xac_nhan.component.html',
})
export class Xac_NhanComponent {
    constructor (
        private location: Location,
        private route: ActivatedRoute,
        private router: Router
    ){}
    gotoNext(){
        let link = ['/lam_bai'];
        this.router.navigate(link);
    }
}