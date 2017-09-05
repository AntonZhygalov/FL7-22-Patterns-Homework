function User(lastVisitDate, globalDiscount, nightDiscount, weekendDiscount, ordersCount, ordersTotalPrice, bonus) {
    this.lastVisitDate = lastVisitDate || new Date(2017, 07, 10, 10, 10);
    this.globalDiscount = globalDiscount || 5;
    this.nightDiscount = nightDiscount || 5;
    this.weekendDiscount = weekendDiscount || 2;
    this.ordersCount = ordersCount || 2;
    this.ordersTotalPrice = ordersTotalPrice || 50;
    this.bonus = bonus || 5;
}

var user = new User();

user.getDiscount = function() {
    var date = new Date();
    if ((date.getHours() === 23 || date.getHours() <= 5) && (date.getDay() === 6 || date.getDay() === 0)) {
        return this.globalDiscount + this.nightDiscount + this.weekendDiscount;
    } else if (date.getHours() === 23 || date.getHours() <= 5) {
        return this.globalDiscount + this.nightDiscount;
    } else if (date.getDay() === 6 || date.getDay() === 0) {
        return this.globalDiscount + this.weekendDiscount;
    }
    return this.globalDiscount;
}

user.getBonus = function() {
    var date = new Date();
    var howManyDays = Math.floor((date - this.lastVisitDate) * 1.1574e-8);
    var howManyHours = Math.floor((date - this.lastVisitDate) * 2.7778e-7);
    if (howManyDays <= 10) {
        return this.bonus + howManyHours + this.ordersCount;
    }
    return this.bonus + this.ordersCount;
}