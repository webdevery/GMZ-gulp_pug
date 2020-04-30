const timerSpeed = 100;

class CloudMove {
    constructor(container) {
        this.elements = [];
        const items = container.children;

        for (let i = 0; i < items.length; i++) {
            const element = items[i];

            if (element.getClientRects && element.getClientRects()[0]) {
                const position = element.getClientRects()[0];
                element.style.left = parseInt(position.left, 10) + 'px';
                this.elements.push({
                    element,
                    left: position.left
                });
            }
        }
        if (this.elements.length) {
            this.animate();
        }
    }

    animate() {
        this.interval = setInterval(() => {
            const width = parseInt(window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth, 10);

            this.elements.forEach(({ element, left }, index) => {
                const position = element.getClientRects()[0];
                if (left >= width) {
                    this.elements[index].left = -parseInt(position.width, 10);
                }
                element.style.left = (left + 0.2) + 'px';
                this.elements[index].left++;
            });
        }, timerSpeed)
    }
}

export default CloudMove;


