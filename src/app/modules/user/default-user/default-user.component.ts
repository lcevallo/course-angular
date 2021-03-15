import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-default-user',
    templateUrl: './default-user.component.html',
    styleUrls: ['./default-user.component.scss'],
})
export class DefaultUserComponent implements OnInit {
    public cards: {
        title: string;
        body?: string;
        isPrimary: boolean;
        isDisabled: boolean;
    }[] = [
        {
            title: 'Tarjeta Secundaria',
            isPrimary: false,
            isDisabled: false,
        },
        {
            title: 'Tarjeta Secundaria',
            isPrimary: false,
            isDisabled: false,
        },
        {
            title: 'Tarjeta Secundaria',
            isPrimary: false,
            isDisabled: false,
        },
        {
            title: 'Tarjeta Secundaria',
            isPrimary: false,
            isDisabled: false,
        },
        {
            title: 'Tarjeta Secundaria',
            isPrimary: false,
            isDisabled: false,
        },
        {
            title: 'Tarjeta Principal',
            isPrimary: true,
            isDisabled: false,
        },
        {
            title: 'Tarjeta Secundaria',
            isPrimary: false,
            isDisabled: false,
        },
        {
            title: 'Tarjeta Desactivada',
            isPrimary: true,
            isDisabled: true,
        },
    ];
    constructor() {}

    ngOnInit() {}

    changeStatus(card: {
        title: string;
        body?: string;
        isPrimary: boolean;
        isDisabled: boolean;
    }) {
        card.isPrimary = !card.isPrimary;
    }

    disabledCard(card: {
        title: string;
        body?: string;
        isPrimary: boolean;
        isDisabled: boolean;
    }) {
        card.isDisabled = !card.isDisabled;
    }
}
