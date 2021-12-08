class Observable
{
    constructor(tab)
    {
        this.tab = [];
    }

    on= function(eventName, callback)
    {

        for (let i = 0; i < this.tab.length; ++i) {
            if (this.tab[i].name == eventName) {
                return;
            }
        }
        this.tab.push({name: eventName, fonction: callback});
    }


    off= function(eventName, callback)
    {
        for (let i = 0; i < this.tab.length; ++i) {
            if (this.tab[i].name == eventName && this.tab[i].fonction == callback) {
                this.tab.splice(i, 1);
            }
        }
    }

    trigger= function(eventName, ...args)
    {
        for (let i = 0; i < this.tab.length; ++i) {
            if (this.tab[i].name == eventName) {
                this.tab[i].fonction.apply(null, args);
            }
        }
    }
}