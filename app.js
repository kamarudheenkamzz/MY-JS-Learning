// Function to escape HTML so it is displayed as text
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;")
                 .replace(/"/g, "&quot;")
                 .replace(/'/g, "&#039;");
  }

  // Get all code blocks by class name
  const codeBlocks = document.querySelectorAll('.code-block');

  // Loop through each code block and escape the HTML content
  codeBlocks.forEach(block => {
    block.innerHTML = escapeHtml(block.innerHTML);
    Prism.highlightElement(block);  // Highlight the code after escaping
  });

  // Copy to clipboard functionality
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach((button, idx) => {
    button.addEventListener('click', () => {
      const codeBlock = codeBlocks[idx];
      const textToCopy = codeBlock.textContent;

      // Create a temporary textarea element to hold the text
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = textToCopy;
      document.body.appendChild(tempTextarea);
      
      // Select the text and copy it
      tempTextarea.select();
      document.execCommand('copy');
      
      // Remove the temporary textarea
      document.body.removeChild(tempTextarea);

      // Change button text to indicate success
      button.textContent = 'Copied!';

      // Change the background color of the button to green to indicate success
      button.style.backgroundColor = 'green';
      
      // Reset button text and color after 2 seconds
      setTimeout(() => {
        button.textContent = 'Copy';
        button.style.backgroundColor = '#007bff';
      }, 2000);
    });
  });



// for sidebar active 
  $(document).ready(function() {
      // Get all the links with an id that starts with "section-link"
      $('a[href^="#section"]').on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Get the section ID from the href attribute
        var sectionId = $(this).attr('href');
        // Calculate the top offset of the target section
        var sectionOffset = $(sectionId).offset().top;
        // Animate the scroll to the target section
        $('html, body').animate({
          scrollTop: sectionOffset
        }, 1000);
      });
      // Add an "active" class to the navigation link when the corresponding section is in view
      $(window).on('scroll', function() {
        // Get the current scroll position
        var currentPosition = $(this).scrollTop();
        // Loop through all the sections
        $('section').each(function() {
          // Calculate the top and bottom offsets of the section
          var sectionTop = $(this).offset().top - 110;
          var sectionBottom = sectionTop + $(this).outerHeight();
          // Check if the current scroll position is within the section boundaries
          if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
            // Get the section ID
            var sectionId = $(this).attr('id');
            // Remove the "active" class from all navigation links
              // var currentShow = $(this).hasClass('show');
              // var hasActive = $('a[href="/#' + sectionId + '"]').parent().parent('ul').find('.show');
              // $(hasActive).removeClass('show');
              $('a[href^="#"]').parent().removeClass('active');
            // Add the "active" class to the corresponding navigation link
            $('a[href="#' + sectionId + '"]').parent().addClass('active');
          }
        });
      });
    });
  





