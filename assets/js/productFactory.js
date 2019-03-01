"use strict";

var productFactory = angular.module('productFactory', []);

productFactory.factory('productFactory', function () {

    var productFactory = {};

    productFactory.products = [
        {
            productId: 1,
            name: "Product1",
            category: "Tennis",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "INTERNATIONALIST-KJCRD-M-QS-829344_006_A_PREM_1.png;INTERNATIONALIST-KJCRD-M-QS-829344_006_D_PREM_2.png;INTERNATIONALIST-KJCRD-M-QS-829344_006_E_PREM_3.png",
            price: 30,
            qty: 6,
            variation: ""
        },
        {
            productId: 2,
            name: "Product2",
            category: "Running",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "NIKE-ROSHE-CORTEZ-NM-823299_607_A_PREM_1.png;NIKE-ROSHE-CORTEZ-NM-823299_607_D_PREM_2.png;NIKE-ROSHE-CORTEZ-NM-823299_607_E_PREM_3.png",
            price: 40,
            qty: 10,
            variation: "6,7,8,9,10,11,12"
        },
        {
            productId: 3,
            name: "Product3",
            category: "Training & Gym",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "NIKE-ROSHE-FLYKNIT-PRM-746825_402_A_PREM_1.png;NIKE-ROSHE-FLYKNIT-PRM-746825_402_D_PREM_3.png;NIKE-ROSHE-FLYKNIT-PRM-746825_402_E_PREM_2.png",
            price: 55,
            qty: 0,
            variation: "7,8,9,10,11"
        },
        {
            productId: 4,
            name: "Product4",
            category: "Running",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "NIKE-ROSHE-NM-FLYKNIT-SE-816531_300_A_PREM_1.png;NIKE-ROSHE-NM-FLYKNIT-SE-816531_300_D_PREM_3.png;NIKE-ROSHE-NM-FLYKNIT-SE-816531_300_E_PREM_2.png",
            price: 30,
            qty: 6,
            variation: "8,9,10,11"
        },
        {
            productId: 5,
            name: "Product5",
            category: "Training & Gym",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "STEFAN-JANOSKI-MAX-PRM-807497_101_A_PREM_1.png;STEFAN-JANOSKI-MAX-PRM-807497_101_D_PREM_2.png;STEFAN-JANOSKI-MAX-PRM-807497_101_E_PREM_3.png",
            price: 40,
            qty: 10,
            variation: "6,7,8,9,10,11,12"
        },
        {
            productId: 6,
            name: "Product6",
            category: "Tennis",
            desc: "Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.",
            image: "TENNIS-CLASSIC-ULTRA-QS-807175_008_A_PREM_1.png;TENNIS-CLASSIC-ULTRA-QS-807175_008_D_PREM_2.png;TENNIS-CLASSIC-ULTRA-QS-807175_008_E_PREM_3.png",
            price: 55,
            qty: 0,
            variation: "7,8,9,10,11"
        }
    ];

    return productFactory;
});