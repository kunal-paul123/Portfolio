// import { Calendar, Clock, ArrowRight } from 'lucide-react';

// const ArticlesSection = () => {
//   const articles = [
//     {
//       title: 'Building Scalable React Applications',
//       excerpt: 'Learn best practices for structuring and scaling React applications as your team and codebase grows.',
//       date: '2024-01-15',
//       readTime: '8 min read',
//       tags: ['React', 'Architecture', 'Best Practices'],
//     },
//     {
//       title: 'TypeScript Tips for Better Code Quality',
//       excerpt: 'Discover advanced TypeScript features that can help you write more maintainable and type-safe code.',
//       date: '2024-01-08',
//       readTime: '6 min read',
//       tags: ['TypeScript', 'Code Quality', 'Development'],
//     },
//     {
//       title: 'Modern CSS Techniques for Responsive Design',
//       excerpt: 'Explore modern CSS features like Grid, Flexbox, and Container Queries for creating responsive layouts.',
//       date: '2024-01-01',
//       readTime: '10 min read',
//       tags: ['CSS', 'Responsive Design', 'Web Development'],
//     },
//     {
//       title: 'API Design Principles for RESTful Services',
//       excerpt: 'Guidelines for designing clean, maintainable, and scalable RESTful APIs that developers love to use.',
//       date: '2023-12-25',
//       readTime: '12 min read',
//       tags: ['API', 'Backend', 'REST'],
//     },
//   ];

//   return (
//     <section className="max-w-4xl mx-auto">
//       <div className="mb-8">
//         <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
//           Articles
//         </h1>
//         <p className="text-lg text-text-secondary leading-relaxed">
//           Thoughts on development, technology, and lessons learned from building software.
//         </p>
//       </div>

//       <div className="space-y-6">
//         {articles.map((article, index) => (
//           <article key={index} className="bg-surface-elevated rounded-lg p-6 shadow-card hover:shadow-elevated transition-all duration-300 group cursor-pointer">
//             <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-3">
//               <h2 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-200 mb-2 lg:mb-0">
//                 {article.title}
//               </h2>
//               <ArrowRight size={20} className="text-text-tertiary group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 self-start lg:self-center" />
//             </div>

//             <p className="text-text-secondary mb-4 leading-relaxed">
//               {article.excerpt}
//             </p>

//             <div className="flex flex-wrap items-center gap-4 text-sm text-text-tertiary mb-4">
//               <div className="flex items-center gap-1">
//                 <Calendar size={14} />
//                 <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <Clock size={14} />
//                 <span>{article.readTime}</span>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2">
//               {article.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="inline-block px-2 py-1 text-xs bg-accent text-accent-foreground rounded-md font-medium"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ArticlesSection;
