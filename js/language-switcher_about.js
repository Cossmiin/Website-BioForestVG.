function switchLanguage(language) {
    // Save the current page location
    const currentLocation = window.location.href;

    // If the user wants to switch to French
    if (language === 'fr') {
        const frenchLocation = currentLocation.replace('about.html', 'about_fr.html');
        window.location.href = frenchLocation;
    }

    // If the user wants to switch to Spanish
    if (language === 'es') {
        const spanishLocation = currentLocation.replace('about_fr.html', 'about.html');
        window.location.href = spanishLocation;
    }
}
    