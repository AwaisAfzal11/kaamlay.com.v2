<?php
// Set headers to allow cross-origin requests and define JSON content type
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Handle preflight OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // --- Get data from JSON payload ---
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    if ($data === null) {
        echo json_encode(["status" => "error", "message" => "Invalid JSON data."]);
        exit;
    }

    // --- Sanitize and retrieve form data ---
    $name = isset($data['name']) ? htmlspecialchars(trim($data['name'])) : '';
    $email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = isset($data['phone']) ? htmlspecialchars(trim($data['phone'])) : 'Not provided';
    $service = isset($data['service']) ? htmlspecialchars(trim($data['service'])) : 'Not selected';
    $package = isset($data['package']) && !empty($data['package']) ? htmlspecialchars(trim($data['package'])) : 'Not selected';
    $message = isset($data['message']) ? htmlspecialchars(trim($data['message'])) : '';

    // --- Validation ---
    if (empty($name) || empty($email) || empty($phone) || empty($service) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit;
    }
    
    // --- Email Configuration ---
    $to = "afzalawais353@gmail.com"; // YOUR EMAIL ADDRESS
    $subject = "New Kaamlay.com Contact Form Submission from: " . $name;
    
    // Construct the email message
    $email_content = "You have received a new message from the Kaamlay.com contact form.\n\n"
                   . "===========================================\n"
                   . " SENDER DETAILS\n"
                   . "===========================================\n"
                   . "Full Name:    {$name}\n"
                   . "Email:        {$email}\n"
                   . "Phone Number: {$phone}\n\n"
                   
                   . "===========================================\n"
                   . " SERVICE & PACKAGE DETAILS\n"
                   . "===========================================\n"
                   . "Service Requested:    {$service}\n"
                   . "Membership Package:   {$package}\n\n"

                   . "===========================================\n"
                   . " MESSAGE\n"
                   . "===========================================\n"
                   . "{$message}\n";
    
    // Set email headers
    $headers = "From: no-reply@kaamlay.com\r\n" .
               "Reply-To: {$email}\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // --- Send Email ---
    if (mail($to, $subject, $email_content, $headers)) {
        // Success response
        echo json_encode(["status" => "success", "message" => "Success! We received your message and will get back to you within 24 hours."]);
    } else {
        // Error response if mail() function fails
        echo json_encode(["status" => "error", "message" => "Sorry, the server failed to send your message. Please try again later."]);
    }
} else {
    // Handle cases where the request method is not POST
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>