function Cartr(){
    this.brand = "Nissan";
    this.Get = () => {
        console.log("The brand is: ", this.brand);
    }
}

module.exports = new Cartr();