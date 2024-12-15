import React from 'react';

const NotionClone = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">Notion Clone Text Editor</h2>
      <img
        src="/assets/notion-clone.png"
        alt="Notion Clone Text Editor"
        className="w-full h-auto mb-6"
      />
      <p className="text-lg mb-4">
        Developed a text editor in C with functionality similar to VIM, including file saving,
        viewing, searching, and editing features. Implemented efficient data structures and file
        I/O handling for optimal text manipulation.
      </p>
      <p className="text-lg mb-4">
        **Challenges & Learnings:** Debugging tricky edge cases and refining search capabilities
        taught me the importance of attention to detail and efficient algorithm design.
      </p>
      {/* Add more details, screenshots, or links as needed */}
    </section>
  );
};

export default NotionClone;
