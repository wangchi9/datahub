//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


ConnectionParams = function(args) {
  this.client_id = null;
  this.seq_id = null;
  this.user = null;
  this.password = null;
  this.repo_base = null;
  if (args) {
    if (args.client_id !== undefined) {
      this.client_id = args.client_id;
    }
    if (args.seq_id !== undefined) {
      this.seq_id = args.seq_id;
    }
    if (args.user !== undefined) {
      this.user = args.user;
    }
    if (args.password !== undefined) {
      this.password = args.password;
    }
    if (args.repo_base !== undefined) {
      this.repo_base = args.repo_base;
    }
  }
};
ConnectionParams.prototype = {};
ConnectionParams.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.client_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.seq_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.user = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.repo_base = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ConnectionParams.prototype.write = function(output) {
  output.writeStructBegin('ConnectionParams');
  if (this.client_id !== null && this.client_id !== undefined) {
    output.writeFieldBegin('client_id', Thrift.Type.STRING, 1);
    output.writeString(this.client_id);
    output.writeFieldEnd();
  }
  if (this.seq_id !== null && this.seq_id !== undefined) {
    output.writeFieldBegin('seq_id', Thrift.Type.STRING, 2);
    output.writeString(this.seq_id);
    output.writeFieldEnd();
  }
  if (this.user !== null && this.user !== undefined) {
    output.writeFieldBegin('user', Thrift.Type.STRING, 3);
    output.writeString(this.user);
    output.writeFieldEnd();
  }
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 4);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  if (this.repo_base !== null && this.repo_base !== undefined) {
    output.writeFieldBegin('repo_base', Thrift.Type.STRING, 5);
    output.writeString(this.repo_base);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Connection = function(args) {
  this.client_id = null;
  this.seq_id = null;
  this.user = null;
  this.repo_base = null;
  this.cursor = null;
  if (args) {
    if (args.client_id !== undefined) {
      this.client_id = args.client_id;
    }
    if (args.seq_id !== undefined) {
      this.seq_id = args.seq_id;
    }
    if (args.user !== undefined) {
      this.user = args.user;
    }
    if (args.repo_base !== undefined) {
      this.repo_base = args.repo_base;
    }
    if (args.cursor !== undefined) {
      this.cursor = args.cursor;
    }
  }
};
Connection.prototype = {};
Connection.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.client_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.seq_id = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.user = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.repo_base = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.cursor = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Connection.prototype.write = function(output) {
  output.writeStructBegin('Connection');
  if (this.client_id !== null && this.client_id !== undefined) {
    output.writeFieldBegin('client_id', Thrift.Type.STRING, 1);
    output.writeString(this.client_id);
    output.writeFieldEnd();
  }
  if (this.seq_id !== null && this.seq_id !== undefined) {
    output.writeFieldBegin('seq_id', Thrift.Type.STRING, 2);
    output.writeString(this.seq_id);
    output.writeFieldEnd();
  }
  if (this.user !== null && this.user !== undefined) {
    output.writeFieldBegin('user', Thrift.Type.STRING, 3);
    output.writeString(this.user);
    output.writeFieldEnd();
  }
  if (this.repo_base !== null && this.repo_base !== undefined) {
    output.writeFieldBegin('repo_base', Thrift.Type.STRING, 4);
    output.writeString(this.repo_base);
    output.writeFieldEnd();
  }
  if (this.cursor !== null && this.cursor !== undefined) {
    output.writeFieldBegin('cursor', Thrift.Type.I64, 5);
    output.writeI64(this.cursor);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Tuple = function(args) {
  this.cells = null;
  if (args) {
    if (args.cells !== undefined) {
      this.cells = args.cells;
    }
  }
};
Tuple.prototype = {};
Tuple.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.cells = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString().value;
          this.cells.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Tuple.prototype.write = function(output) {
  output.writeStructBegin('Tuple');
  if (this.cells !== null && this.cells !== undefined) {
    output.writeFieldBegin('cells', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRING, this.cells.length);
    for (var iter7 in this.cells)
    {
      if (this.cells.hasOwnProperty(iter7))
      {
        iter7 = this.cells[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ResultSet = function(args) {
  this.status = null;
  this.con = null;
  this.num_tuples = null;
  this.num_more_tuples = null;
  this.tuples = null;
  this.field_names = null;
  this.field_types = null;
  if (args) {
    if (args.status !== undefined) {
      this.status = args.status;
    }
    if (args.con !== undefined) {
      this.con = args.con;
    }
    if (args.num_tuples !== undefined) {
      this.num_tuples = args.num_tuples;
    }
    if (args.num_more_tuples !== undefined) {
      this.num_more_tuples = args.num_more_tuples;
    }
    if (args.tuples !== undefined) {
      this.tuples = args.tuples;
    }
    if (args.field_names !== undefined) {
      this.field_names = args.field_names;
    }
    if (args.field_types !== undefined) {
      this.field_types = args.field_types;
    }
  }
};
ResultSet.prototype = {};
ResultSet.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.status = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.con = new Connection();
        this.con.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.num_tuples = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.num_more_tuples = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.tuples = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new Tuple();
          elem14.read(input);
          this.tuples.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.LIST) {
        var _size15 = 0;
        var _rtmp319;
        this.field_names = [];
        var _etype18 = 0;
        _rtmp319 = input.readListBegin();
        _etype18 = _rtmp319.etype;
        _size15 = _rtmp319.size;
        for (var _i20 = 0; _i20 < _size15; ++_i20)
        {
          var elem21 = null;
          elem21 = input.readString().value;
          this.field_names.push(elem21);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.LIST) {
        var _size22 = 0;
        var _rtmp326;
        this.field_types = [];
        var _etype25 = 0;
        _rtmp326 = input.readListBegin();
        _etype25 = _rtmp326.etype;
        _size22 = _rtmp326.size;
        for (var _i27 = 0; _i27 < _size22; ++_i27)
        {
          var elem28 = null;
          elem28 = input.readString().value;
          this.field_types.push(elem28);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ResultSet.prototype.write = function(output) {
  output.writeStructBegin('ResultSet');
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.BOOL, 1);
    output.writeBool(this.status);
    output.writeFieldEnd();
  }
  if (this.con !== null && this.con !== undefined) {
    output.writeFieldBegin('con', Thrift.Type.STRUCT, 2);
    this.con.write(output);
    output.writeFieldEnd();
  }
  if (this.num_tuples !== null && this.num_tuples !== undefined) {
    output.writeFieldBegin('num_tuples', Thrift.Type.I64, 3);
    output.writeI64(this.num_tuples);
    output.writeFieldEnd();
  }
  if (this.num_more_tuples !== null && this.num_more_tuples !== undefined) {
    output.writeFieldBegin('num_more_tuples', Thrift.Type.I64, 4);
    output.writeI64(this.num_more_tuples);
    output.writeFieldEnd();
  }
  if (this.tuples !== null && this.tuples !== undefined) {
    output.writeFieldBegin('tuples', Thrift.Type.LIST, 5);
    output.writeListBegin(Thrift.Type.STRUCT, this.tuples.length);
    for (var iter29 in this.tuples)
    {
      if (this.tuples.hasOwnProperty(iter29))
      {
        iter29 = this.tuples[iter29];
        iter29.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.field_names !== null && this.field_names !== undefined) {
    output.writeFieldBegin('field_names', Thrift.Type.LIST, 6);
    output.writeListBegin(Thrift.Type.STRING, this.field_names.length);
    for (var iter30 in this.field_names)
    {
      if (this.field_names.hasOwnProperty(iter30))
      {
        iter30 = this.field_names[iter30];
        output.writeString(iter30);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.field_types !== null && this.field_types !== undefined) {
    output.writeFieldBegin('field_types', Thrift.Type.LIST, 7);
    output.writeListBegin(Thrift.Type.STRING, this.field_types.length);
    for (var iter31 in this.field_types)
    {
      if (this.field_types.hasOwnProperty(iter31))
      {
        iter31 = this.field_types[iter31];
        output.writeString(iter31);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DBException = function(args) {
  this.error_code = null;
  this.message = null;
  this.details = null;
  if (args) {
    if (args.error_code !== undefined) {
      this.error_code = args.error_code;
    }
    if (args.message !== undefined) {
      this.message = args.message;
    }
    if (args.details !== undefined) {
      this.details = args.details;
    }
  }
};
Thrift.inherits(DBException, Thrift.TException);
DBException.prototype.name = 'DBException';
DBException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.error_code = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.details = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DBException.prototype.write = function(output) {
  output.writeStructBegin('DBException');
  if (this.error_code !== null && this.error_code !== undefined) {
    output.writeFieldBegin('error_code', Thrift.Type.I32, 1);
    output.writeI32(this.error_code);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.details !== null && this.details !== undefined) {
    output.writeFieldBegin('details', Thrift.Type.STRING, 3);
    output.writeString(this.details);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

VERSION = 1;
