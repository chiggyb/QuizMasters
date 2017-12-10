stripquotes(name: string):string {
    if (name.charAt(0) === '"' && name.charAt(name.length-1) === '"') {
        return name.substr(1, name.length-2);
    }
    return name;
}