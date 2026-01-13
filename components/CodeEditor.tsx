import React from 'react';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  language: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange, language }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  // Simple line number generation
  const lineNumbers = code.split('\n').map((_, i) => i + 1).join('\n');

  return (
    <div className="relative w-full h-full flex bg-editor-bg font-mono text-sm overflow-hidden">
      {/* Line Numbers */}
      <div className="hidden sm:block w-12 bg-editor-bg text-gray-500 text-right pr-3 pt-4 select-none border-r border-gray-700 leading-6">
        <pre className="font-mono">{lineNumbers}</pre>
      </div>
      
      {/* Editor Area */}
      <textarea
        value={code}
        onChange={handleChange}
        spellCheck={false}
        className="flex-1 bg-editor-bg text-editor-text p-4 outline-none resize-none leading-6 whitespace-pre font-mono"
        placeholder={`Type your ${language} code here...`}
      />
    </div>
  );
};
