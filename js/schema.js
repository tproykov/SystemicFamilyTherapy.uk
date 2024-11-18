const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Systemic Family Therapy - Dr Todor Proykov",
    "description": "Professional systemic family therapy services helping families improve communication and resolve conflicts.",
    "provider": {
        "@type": "Person",
        "name": "Dr Todor Proykov",
        "jobTitle": "Systemic Family Psychotherapist"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Family Therapy"
};

// Create and inject the script tag
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);