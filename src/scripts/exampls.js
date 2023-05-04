class Example {
    constructor(el) {
        this.el = el;
        this.el.innerHTML = "<h1>It's ALIVE!!</h1>";
        this.handleclick = this.handleclick.bind(this);
        this.el.addEventListener('click', this.handleclick);
    }

    handleclick(e) {

    }

}