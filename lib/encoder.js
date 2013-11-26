var Stream = require( 'stream' )

function Encoder( options ) {
  
  if( !(this instanceof Encoder) )
    return new Encoder( options )
  
  this.options = options || {}
  this.options.objectMode = true
  // this.options.decodeStrings = false
  
  // Inherit from Transform stream
  Stream.Transform.call( this, this.options )
  
}

module.exports = Encoder

Encoder.encode = require( './encode' )

Encoder.prototype = {
  
  constructor: Encoder,
  
  _transform: function( chunk, encoding, done ) {
    // console.log( 'encoder::_transform', chunk )
    this.push( Encoder.encode( chunk ) )
    done()
  }
  
}

// Inherit from Transform stream
Encoder.prototype.__proto__ =
  Stream.Transform.prototype