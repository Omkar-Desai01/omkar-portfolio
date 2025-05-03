import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaQuestionCircle, FaGamepad, FaCode, FaChevronDown, FaChevronUp, FaMinus } from 'react-icons/fa';
import '../styles/Terminal.css';

const PROMPT_WIDTH = '1.5em';

const TerminalEasterEgg = ({ isMatrixActive, setIsMatrixActive, setIsSnakeGameVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(-1);
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  const availableCommands = {
    help: 'Show this help message',
    about: 'About me',
    skills: 'My skills',
    clear: 'Clear terminal',
    matrix: 'Toggle matrix effect',
    game: 'Start Snake game',
    minimize: 'Minimize terminal',
    maximize: 'Maximize terminal',
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setIsVisible(false);
        setCommand('');
        setOutput([]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.altKey && e.key === 't') {
        setIsVisible(true);
        setIsMinimized(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const addToOutput = (text, type = 'info') => {
    setOutput(prev => [...prev, { text, type, timestamp: new Date().toLocaleTimeString() }]);
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = command.toLowerCase().trim();
      if (cmd) {
        setCommandHistory(prev => [cmd, ...prev]);
        setHistoryIndex(-1);
        setSuggestions([]);
        
        switch (cmd) {
          case 'help':
            addToOutput('Available commands:', 'info');
            Object.entries(availableCommands).forEach(([cmd, desc]) => {
              addToOutput(`${cmd} - ${desc}`, 'command');
            });
            break;
          case 'about':
            addToOutput('I am a passionate developer who loves creating innovative solutions...', 'info');
            break;
          case 'skills':
            addToOutput('React, Node.js, Python, AWS, Docker, and more...', 'info');
            break;
          case 'clear':
            setOutput([]);
            break;
          case 'matrix':
            setIsMatrixActive(prev => !prev);
            addToOutput(`Matrix effect ${!isMatrixActive ? 'activated' : 'deactivated'}!`, 'success');
            break;
          case 'game':
            setIsSnakeGameVisible(true);
            addToOutput('Starting Snake game...', 'success');
            break;
          case 'minimize':
            setIsMinimized(true);
            addToOutput('Terminal minimized', 'info');
            break;
          case 'maximize':
            setIsMinimized(false);
            addToOutput('Terminal maximized', 'info');
            break;
          default:
            addToOutput(`Command not found: ${cmd}. Type 'help' for available commands.`, 'error');
        }
        setCommand('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        setHistoryIndex(prev => prev + 1);
        setCommand(commandHistory[historyIndex + 1]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        setHistoryIndex(prev => prev - 1);
        setCommand(commandHistory[historyIndex - 1]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommand('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setSuggestionIndex(prev => (prev + 1) % suggestions.length);
        setCommand(suggestions[suggestionIndex]);
      }
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCommand(value);
    
    if (value.trim()) {
      const matches = Object.keys(availableCommands).filter(cmd => 
        cmd.startsWith(value.toLowerCase())
      );
      setSuggestions(matches);
      setSuggestionIndex(-1);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            height: isMinimized ? '40px' : '400px'
          }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 w-[600px] bg-black/95 rounded-lg shadow-2xl p-4 font-mono text-green-400 z-50 border border-green-500/20 overflow-hidden"
        >
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-green-500/20">
            <div className="flex items-center gap-2">
              <FaTerminal className="text-green-400" />
              <span className="text-sm font-semibold">Developer Terminal v1.0</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:text-green-400 transition-colors"
              >
                {isMinimized ? <FaChevronUp /> : <FaMinus />}
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-red-400 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-mono">
                  <div 
                    ref={outputRef}
                    className="h-[300px] overflow-y-auto mb-3 custom-scrollbar"
                    style={{ paddingLeft: 0, marginLeft: 0 }}
                  >
                    <div className="text-sm" style={{ paddingLeft: 0, marginLeft: 0 }}>
                      <div className="flex items-start" style={{ minHeight: '1.5em' }}>
                        <span style={{ display: 'inline-block', width: PROMPT_WIDTH }}></span>
                        <span className="text-green-400/80 flex-1 w-full break-words">Welcome to the secret terminal! Type 'help' for commands.</span>
                      </div>
                      {output.map((item, index) => (
                        <div key={index} className="flex items-start" style={{ minHeight: '1.5em' }}>
                          <span style={{ display: 'inline-block', width: PROMPT_WIDTH }}></span>
                          <span className={`${item.type === 'error' ? 'text-red-400' : item.type === 'success' ? 'text-green-400' : 'text-green-400/80'} flex-1 w-full break-words`}
                            style={{ paddingLeft: 0, marginLeft: 0, display: 'block' }}>
                            <span className="text-xs opacity-50 mr-2">{item.timestamp}</span>
                            <span>{item.text}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 p-2 rounded" style={{ fontFamily: 'inherit' }}>
                    <span className="text-green-400" style={{ display: 'inline-block', width: PROMPT_WIDTH }}>$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={command}
                      onChange={handleInputChange}
                      onKeyDown={handleCommand}
                      className="bg-transparent border-none outline-none text-green-400 w-full font-mono"
                      placeholder="Type a command..."
                      autoFocus
                    />
                  </div>
                  {suggestions.length > 0 && (
                    <div className="absolute bottom-16 left-4 right-4 bg-black/90 rounded p-2 border border-green-500/20">
                      {suggestions.map((suggestion, index) => (
                        <div
                          key={suggestion}
                          className={`px-2 py-1 cursor-pointer ${
                            index === suggestionIndex ? 'bg-green-500/20' : 'hover:bg-green-500/10'
                          }`}
                          onClick={() => {
                            setCommand(suggestion);
                            setSuggestions([]);
                          }}
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalEasterEgg; 