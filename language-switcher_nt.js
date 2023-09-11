function switchLanguage(language) {
    // Save the current page location
    const currentLocation = window.location.href;

    // If the user wants to switch to French
    if (language === 'fr') {
        const frenchLocation = currentLocation.replace('nuestrostrabajos.html', 'nt_fr.html');
        window.location.href = frenchLocation;
    }

    // If the user wants to switch to Spanish
    if (language === 'es') {
        const spanishLocation = currentLocation.replace('nt_fr.html', 'nuestrostrabajos.html');
        window.location.href = spanishLocation;
    }
}
    