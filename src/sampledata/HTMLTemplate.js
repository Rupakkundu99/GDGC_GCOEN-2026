export const thankContact = (name) => {
  const htmlData = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GDG Thank You Email</title>
      <style>
          .mybody {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              width: 100%;
              background-color: #f4f4f9;
          }
  
          .containermain {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 10px 6px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid gray;
          }
  
          img {
              width: 100%;
          }
  
          .header {
              background-color: gray;
              color: #ffffff;
              padding: 20px;
              text-align: center;
              font-size: 14px;
          }
  
          .content {
              padding: 20px;
              text-align: justify;
          }
  
          .content h1 {
              font-size: 20px;
              margin: 0 0 10px;
              color: #333;
          }
  
          .content p {
              font-size: 14px;
              line-height: 1.6;
              color: #555;
              margin-bottom: 20px;
          }
  
          .button {
              text-align: center;
              margin: 20px 0;
          }
  
          .button a {
              background-color: #4285F4;
              color: #ffffff;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 4px;
              font-size: 14px;
          }
  
          .footer {
              background-color: #eeeeee;
              padding: 10px;
              text-align: center;
              font-size: 12px;
              color: #777;
          }
  
          .social-links {
              margin-top: 10px;
          }
  
          .social-links a {
              color: #4285F4;
              text-decoration: none;
              margin: 0 5px;
              font-size: 14px;
          }
  
          .social-links a:hover {
              text-decoration: underline;
              color: #0b66c3;
          }
  
          @media (max-width: 600px) {
              .content h1 {
                  font-size: 18px;
              }
  
              .content p {
                  font-size: 13px;
              }
  
              .button a {
                  font-size: 13px;
                  padding: 8px 16px;
              }
          }
      </style>
  </head>
  <body>
      <div class="mybody">
          <div class="containermain">
              <div class="header">
                  Google Developer Groups - GDG on Campus <br />
                  Government College of Engineering - Nagpur, India
              </div>
              <img src="https://cloud.appwrite.io/v1/storage/buckets/6759caf200334d2297e8/files/67713c8800232ee9dd35/view?project=6749e597002403b3c2d4" alt="GDG Logo" />
              <div class="content">
                  <h1>Hey ${name},</h1>
                  <p>
                      Thanks for contacting GDG on Campus, Government College of Engineering - Nagpur, India! We are thrilled to have you as part of our group. 
                      Feel free to explore our past events and stay tuned for upcoming activities.
                  </p>
                  <p>
                      We encourage you to visit our chapter page to learn more about us and connect with our organizers for any suggestions or feedback.
                  </p>
                  <div class="button">
                      <a href="https://gdgc.gcoen.club" target="_blank">View Chapter Page</a>
                  </div>
              </div>
              <div class="footer">
                  If you have any questions, feel free to reach out to us. <br />
                  Follow us on social media for the latest updates:
                  <div class="social-links">
                      <a href="http://www.youtube.com/@gdscgcoen3822" target="_blank">YouTube</a> | 
                      <a href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ" target="_blank">WhatsApp</a> | 
                      <a href="https://www.instagram.com/gdgcgcoen" target="_blank">Instagram</a> | 
                      <a href="https://www.linkedin.com/company/gdgoncampus-gcoen/" target="_blank">LinkedIn</a> | 
                      <a href="https://x.com/GDGCGcoen" target="_blank">Twitter</a>
                  </div>
              </div>
          </div>
      </div>
  </body>
  </html>
  `;
  return htmlData;
};

export const welcomeUser = (name) => {
  const htmlData = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to GDG on Campus</title>
         <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <style>
            .mybody {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                width: 100%;
                background-color: #f4f4f9;
            }
  
            .containermain {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 10px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                border: 1px solid gray;
            }
  
            img {
                width: 100%;
            }
  
            .header {
                background-color: #4285F4;
                color: #ffffff;
                padding: 20px;
                text-align: center;
                font-size: 14px;
            }
  
            .content {
                padding: 20px;
                text-align: justify;
            }
  
            .content h1 {
                font-size: 22px;
                margin: 0 0 10px;
                color: #333;
            }
  
            .content p {
                font-size: 14px;
                line-height: 1.6;
                color: #555;
                margin-bottom: 20px;
            }
  
            .button {
                text-align: center;
                margin: 20px 0;
            }
  
            .button a {
                background-color: #34A853;
                color: #ffffff;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 4px;
                font-size: 14px;
            }
  
            .footer {
                // background-color: #eeeeee;
                padding: 10px;
                text-align: center;
                font-size: 12px;
                color: #777;
            }
  
            @media (max-width: 600px) {
                .content h1 {
                    font-size: 20px;
                }
  
                .content p {
                    font-size: 13px;
                }
  
                .button a {
                    font-size: 13px;
                    padding: 8px 16px;
                }
            }
                .social-links {
    margin-top: 10px;
}

.social-links a {
    color: #4285F4;
    text-decoration: none;
    margin: 0 5px;
    font-size: 14px;
}

.social-links a:hover {
    text-decoration: underline;
    color: #0b66c3;
}
        </style>
    </head>
    <body>
        <div class="mybody">
            <div class="containermain">
                <div class="header">
                    Welcome to Google Developer Groups - GDG on Campus, Government College of Engineering - Nagpur, India
                </div>
                <img src="https://cloud.appwrite.io/v1/storage/buckets/6759caf200334d2297e8/files/67713c8800232ee9dd35/view?project=6749e597002403b3c2d4" alt="GDG Logo" />
                <div class="content">
                    <h1>Welcome, ${name}!</h1>
                    <p>Congratulations on successfully registering with GDG on Campus at Government College of Engineering - Nagpur! You are now part of a vibrant community of developers and tech enthusiasts who are shaping the future of technology.</p>
                    <p>Stay tuned for our upcoming events, workshops, and networking opportunities. We encourage you to actively participate and contribute to the community. Together, let's innovate and grow!</p>
                    <div class="button">
                        <a href="https://gdgc.gcoen.club">Visit Now</a>
                    </div>
                </div>
               <div class="footer">
    If you have any questions, feel free to reach out to us. <br />
    Follow us on social media for the latest updates:
    <div class="social-links">
        <a href="http://www.youtube.com/@gdscgcoen3822" target="_blank">Youtube</a> | 
        <a href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ" target="_blank">Whatsapp</a> | 
        <a href="https://www.instagram.com/gdgcgcoen" target="_blank">Instagram</a> | 
        <a href="https://www.linkedin.com/company/gdgoncampus-gcoen/" target="_blank">LinkedIn</a> |
        <a href="https://x.com/GDGCGcoen" target="_blank">Twitter</a>
    </div>
</div>
            </div>
        </div>
    </body>
    </html>`;
  return htmlData;
};

export const generateEventThankYouHTML = (
  eventName,
  userName,
  eventDate,
  eventLocation,
  BannerURL,
  qrCode
) => {
  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <img  style="width:100%" src="https://cloud.appwrite.io/v1/storage/buckets/6759caf200334d2297e8/files/67713c8800232ee9dd35/view?project=6749e597002403b3c2d4" alt="GDG Logo" />
    <div style="padding: 20px;">
          <p style="font-size: 16px;">Hi <strong>${userName}</strong>,</p>
          <p style="font-size: 16px;">We're thrilled to confirm your registration for the event:</p>
          <h2 style="color: #4CAF50; margin: 10px 0;">${eventName}</h2>
          <p style="font-size: 16px;"><strong>Date:</strong> ${eventDate}</p>
          <p style="font-size: 16px;"><strong>Location:</strong> ${eventLocation}</p>
          <p style="font-size: 16px;">
            Thank you for joining us! We look forward to welcoming you to the event. If you have any questions, feel free to reach out to us at <a href="mailto:gdsc.gcoen@gmail.com" style="color: #4CAF50;">gdsc.gcoen@gmail.com</a>.
          </p>
          <p style="font-size: 15px;">
          Join our Whatsapp Group : 
          <br/>
            <a href="https://chat.whatsapp.com/Gk1Q0DKMFJ0Bq28N8MTagU" target="_blank" style="color: #4CAF50;">https://chat.whatsapp.com/Gk1Q0DKMFJ0Bq28N8MTagU</a>
          </p>
          <p style="font-size: 16px;">Best regards,</p>
          <p style="font-size: 14px;">
          The GDG GCOEN Team
          <br/>
          Google Developer Group On Campus,
          <br />
          Government College of Engineering, Nagpur
          <br />
          gdsc.gcoen@gmail.com</p>
        </div>

          <div style="text-align: center; margin-top: 20px;">
                          <img src="${qrCode}" style="width: 150px; height: 150px; display: block; margin: auto;" alt="QR Code" />
                      </div>
        <div style="background-color: #f9f9f9; text-align: center; padding: 10px; font-size: 14px; color: #777;">
          <p style="margin: 0;">&copy; ${new Date().getFullYear()} GDG GCOEN. All rights reserved.</p>
        </div>
      </div>
    `;
};

export const HackOnRegConfirmed = (
  name,
  qrCode,
  EventName,
  eventDate,
  eventLocation,
  members,
  paymentStatus,
  leader,
  paymentID,
  TeamName,
  AmPaid
) => {
  const memberRows = members
    .map(
      (member, index) => `
          <tr key=${index} >
              <td style='border: 1px solid black; padding: 5px 10px; font-size: 10px; color:black; text-align: left;'>${member.name}</td>
              <td style='border: 1px solid black; padding: 5px 10px; font-size: 10px; color:black; text-align: left;'>${member.email}</td>
              <td style='border: 1px solid black; padding: 5px 10px; font-size: 10px; color:black; text-align: left;'>Member</td>
          </tr>`
    )
    .join("");

  const htmlData = `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style=' color:black; font-family: Arial, sans-serif; margin: 0; width: 100%;'>
              <div style='max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 10px 6px rgba(0, 0, 0, 0.1); overflow: hidden; border: 1px solid gray;'>
                  <img src="https://cloud.appwrite.io/v1/storage/buckets/6759caf200334d2297e8/files/67713c8800232ee9dd35/view?project=6749e597002403b3c2d4" alt="GDG Logo" style='width: 100%;' />
                  <div style='padding: 20px; text-align: justify;'>
                      <p style="color:black; font-size: 16px;">Dear <strong>${name}</strong>,</p>
                      <p style="color:black; font-size: 16px;">We're thrilled to confirm your registration for the event: <b>${EventName}</b></p>
                      <p style="color:black; font-size: 16px;"><strong>Date:</strong> ${eventDate}</p>
                      <p style="color:black; font-size: 16px;"><strong>Venue:</strong> ${eventLocation}</p>
                      <p style="color:black; font-size: 16px;">Here are your team details:</p>
                      <p style="font-size: 16px; color:black;"><strong>Team Name:</strong> ${TeamName}</p>
                      <table style='width: 100%; border-collapse: collapse; margin-top: 20px; color:black;'>
                          <tr>
                              <th style='border: 1px solid black; padding: 5px 10px; font-size: 10px; color:black; text-align: left;'>Name</th>
                              <th style='border: 1px solid black; padding: 5px 10px; font-size: 10px; color:black; text-align: left;'>Email</th>
                              <th style='border: 1px solid black; padding: 5px 10px; font-size: 10px; color:black; text-align: left;'>Role</th>
                          </tr>
                          <tr>
                              <td style='color:black; border: 1px solid black; padding: 5px 10px; font-size: 10px; color:black; text-align: left;'>${leader.name}</td>
                              <td style='color:black; border: 1px solid black; padding: 5px 10px; font-size: 10px; color:black; text-align: left;'>${leader.email}</td>
                              <td style='color:black; border: 1px solid black; padding: 5px 10px; font-size: 10px; color:black; text-align: left;'>Leader</td>
                          </tr>
                          ${memberRows}
                      </table>
                      <p style="font-size: 16px; margin-top:30px; color:black;"><strong>Payment Status:</strong> ${paymentStatus}</p>
                      <p style="font-size: 16px; color:black;"><strong>Payment ID:</strong> ${paymentID}</p>
                      <p style="font-size: 16px; color:black;"><strong>Paid:</strong>₹ ${AmPaid}</p>
                      <strong>Follow this link to join my WhatsApp group:</strong>
                                <br />
                                <a
                                style="color:blue;"
                                    href="https://chat.whatsapp.com/Hd5IZDgZfnX83xETYDD6QR"
                                    target="_blank"
                                >
                                    https://chat.whatsapp.com/Hd5IZDgZfnX83xETYDD6QR
                                </a>
                      </p>
                      <p style="font-size: 16px; color:black;">Thank you for joining us! We look forward to welcoming you to the event.</p>
                      <div style="text-align: center; margin-top: 20px;">
                          <img src="${qrCode}" style="width: 150px; height: 150px; display: block; margin: auto;" alt="QR Code" />
                      </div>
                  </div>
                  <div style='background-color: #eeeeee; padding: 10px; text-align: center; font-size: 12px; color: #777;'>
                      If you have any questions, feel free to reach out to us. <br />
                      Follow us on social media for the latest updates and future events:
                      <div>
                          <a href="http://www.youtube.com/@gdscgcoen3822" target="_blank" style='color: #4285F4; text-decoration: none; margin: 0 5px; font-size: 14px;'>YouTube</a> | 
                          <a href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ" target="_blank" style='color: #4285F4; text-decoration: none; margin: 0 5px; font-size: 14px;'>WhatsApp</a> | 
                          <a href="https://www.instagram.com/gdgcgcoen" target="_blank" style='color: #4285F4; text-decoration: none; margin: 0 5px; font-size: 14px;'>Instagram</a> | 
                          <a href="https://www.linkedin.com/company/gdgoncampus-gcoen/" target="_blank" style='color: #4285F4; text-decoration: none; margin: 0 5px; font-size: 14px;'>LinkedIn</a> | 
                          <a href="https://x.com/GDGCGcoen" target="_blank" style='color: #4285F4; text-decoration: none; margin: 0 5px; font-size: 14px;'>Twitter</a>
                      </div>
                  </div>
              </div>
          </body>
          </html>`;
  return htmlData;
};

export const HackOnRegWebHook = (
  name,
  qrCode,
  EventName,
  eventDate,
  eventLocation,
  paymentStatus,
  paymentID,
  TeamName,
  AmPaid
) => {
  const htmlData = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style=' color:black; font-family: Arial, sans-serif; margin: 0; width: 100%;'>
                <div style='max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 10px 6px rgba(0, 0, 0, 0.1); overflow: hidden; border: 1px solid gray;'>
                    <img src="https://cloud.appwrite.io/v1/storage/buckets/6759caf200334d2297e8/files/67713c8800232ee9dd35/view?project=6749e597002403b3c2d4" alt="GDG Logo" style='width: 100%;' />
                    <div style='padding: 20px; text-align: justify;'>
                        <p style="color:black; font-size: 16px;">Dear <strong>${name}</strong>,</p>
                        <p style="color:black; font-size: 16px;">We're thrilled to confirm your registration for the event: <b>${EventName}</b></p>
                        <p style="color:black; font-size: 16px;"><strong>Date:</strong> ${eventDate}</p>
                        <p style="color:black; font-size: 16px;"><strong>Venue:</strong> ${eventLocation}</p>
                        <p style="color:black; font-size: 16px;">Here are your team details:</p>
                        <p style="font-size: 16px; color:black;"><strong>Team Name:</strong> ${TeamName}</p>
                       
                        <p style="font-size: 16px; margin-top:30px; color:black;"><strong>Payment Status:</strong> ${paymentStatus}</p>
                        <p style="font-size: 16px; color:black;"><strong>Payment ID:</strong> ${paymentID}</p>
                        <p style="font-size: 16px; color:black;"><strong>Paid:</strong>₹ ${AmPaid}</p>
                        <strong>Follow this link to join my WhatsApp group:</strong>
                                  <br />
                                  <a
                                  style="color:blue;"
                                      href="https://chat.whatsapp.com/Hd5IZDgZfnX83xETYDD6QR"
                                      target="_blank"
                                  >
                                      https://chat.whatsapp.com/Hd5IZDgZfnX83xETYDD6QR
                                  </a>
                        </p>
                        <p style="font-size: 16px; color:black;">Thank you for joining us! We look forward to welcoming you to the event.</p>
                        <div style="text-align: center; margin-top: 20px;">
                            <img src="${qrCode}" style="width: 150px; height: 150px; display: block; margin: auto;" alt="QR Code" />
                        </div>
                    </div>
                    <div style='background-color: #eeeeee; padding: 10px; text-align: center; font-size: 12px; color: #777;'>
                        If you have any questions, feel free to reach out to us. <br />
                        Follow us on social media for the latest updates and future events:
                        <div>
                            <a href="http://www.youtube.com/@gdscgcoen3822" target="_blank" style='color: #4285F4; text-decoration: none; margin: 0 5px; font-size: 14px;'>YouTube</a> | 
                            <a href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ" target="_blank" style='color: #4285F4; text-decoration: none; margin: 0 5px; font-size: 14px;'>WhatsApp</a> | 
                            <a href="https://www.instagram.com/gdgcgcoen" target="_blank" style='color: #4285F4; text-decoration: none; margin: 0 5px; font-size: 14px;'>Instagram</a> | 
                            <a href="https://www.linkedin.com/company/gdgoncampus-gcoen/" target="_blank" style='color: #4285F4; text-decoration: none; margin: 0 5px; font-size: 14px;'>LinkedIn</a> | 
                            <a href="https://x.com/GDGCGcoen" target="_blank" style='color: #4285F4; text-decoration: none; margin: 0 5px; font-size: 14px;'>Twitter</a>
                        </div>
                    </div>
                </div>
            </body>
            </html>`;
  return htmlData;
};
