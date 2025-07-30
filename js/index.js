 // Load your images on page-load
        function preloader() {
            const imagesList = [
                "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1452179535021-368bb0edc3a8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ];
            const images = [];
            for (let i = 0; i < imagesList.length; i++) {
                images[i] = new Image();
                images[i].src = imagesList[i];
            }

            // Images ready to be used:
            console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
        }
        window.addEventListener("load", preloader);

        // Get all buttons in a NODE LIST of buttons (array like structure)
        const buttons = document.querySelectorAll('.content-btn');

        // Complete your resource-object that will store the dynamic content
        const resourceObject = {
            solarSolutions: {
                headingContent: "Affordable Solar Panel Systems",
                bodyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                imgUrl: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imgAlt: "Solar panel installation"
            },
            windSolutions: {
                headingContent: "Affordable Windmills Systems ",
                bodyText: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                imgUrl: "https://images.unsplash.com/photo-1452179535021-368bb0edc3a8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imgAlt: "Windmills installations"
            },
            Insulations: {
                headingContent: "Insulations Options",
                bodyText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                imgUrl: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imgAlt: "Insulations oriented solution"
            }
        };

        // Get the reference to your HTML-container that will be dynamically loaded
        const contentContainer = document.getElementById('content-container');

        // Start your handleSelection function here
        function handleSelection(event) {
            // Remove the id active-button from the element that contains it prior to the click-event
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].hasAttribute('id') && buttons[i].getAttribute('id') === 'active-button') {
                    buttons[i].removeAttribute('id');
                }
            }

            // Use the element-object method setAttribute() to set the id active-button to the currently clicked button
            event.target.setAttribute('id', 'active-button');

            // Use conditional and event-object to check which button is clicked and display corresponding content
            let contentKey;
            if (event.target.textContent === 'Solar Solutions') {
                contentKey = 'solarSolutions';
            } else if (event.target.textContent === 'Wind Solutions') {
                contentKey = 'windSolutions';
            } else if (event.target.textContent === 'Insulations') {
                contentKey = 'Insulations';
            }

            const selectedContent = resourceObject[contentKey];
            contentContainer.innerHTML = `
                <h1>${selectedContent.headingContent}</h1>
                <img src="${selectedContent.imgUrl}" alt="${selectedContent.imgAlt}">
                <p>${selectedContent.bodyText}</p>
            `;
        }
        // Close your handleSelection function here

        // Register all buttons to click event
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', handleSelection);
        }
